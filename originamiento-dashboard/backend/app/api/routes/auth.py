from fastapi import APIRouter, HTTPException, Depends
from fastapi.security import HTTPBearer, HTTPAuthCredentials
from pydantic import BaseModel
from datetime import datetime, timedelta
import jwt
import os
import logging

logger = logging.getLogger(__name__)

router = APIRouter()
security = HTTPBearer()

# JWT Configuration
SECRET_KEY = os.getenv("SECRET_KEY", "your-secret-key-change-in-production")
ALGORITHM = "HS256"
ACCESS_TOKEN_EXPIRE_MINUTES = 480


class LoginRequest(BaseModel):
    username: str
    password: str


class LoginResponse(BaseModel):
    access_token: str
    token_type: str
    username: str


class User(BaseModel):
    username: str
    email: str


def create_access_token(username: str, expires_delta: timedelta = None):
    """Create JWT access token"""
    if expires_delta is None:
        expires_delta = timedelta(minutes=ACCESS_TOKEN_EXPIRE_MINUTES)
    
    expire = datetime.utcnow() + expires_delta
    payload = {
        "sub": username,
        "exp": expire,
        "iat": datetime.utcnow()
    }
    
    encoded_jwt = jwt.encode(payload, SECRET_KEY, algorithm=ALGORITHM)
    return encoded_jwt


def verify_token(credentials: HTTPAuthCredentials = Depends(security)):
    """Verify JWT token"""
    token = credentials.credentials
    try:
        payload = jwt.decode(token, SECRET_KEY, algorithms=[ALGORITHM])
        username = payload.get("sub")
        if username is None:
            raise HTTPException(status_code=401, detail="Invalid token")
        return {"username": username}
    except jwt.ExpiredSignatureError:
        raise HTTPException(status_code=401, detail="Token expired")
    except jwt.InvalidTokenError:
        raise HTTPException(status_code=401, detail="Invalid token")


@router.post("/login", response_model=LoginResponse)
def login(request: LoginRequest):
    """Login endpoint"""
    try:
        # Simple validation - in production, validate against a database
        if not request.username or not request.password:
            raise HTTPException(status_code=400, detail="Missing username or password")
        
        # Create token
        access_token = create_access_token(request.username)
        
        return LoginResponse(
            access_token=access_token,
            token_type="bearer",
            username=request.username
        )
    except HTTPException:
        raise
    except Exception as e:
        logger.error(f"Login error: {str(e)}")
        raise HTTPException(status_code=500, detail=str(e))


@router.get("/me", response_model=User)
def get_me(user = Depends(verify_token)):
    """Get current user information"""
    try:
        return User(
            username=user["username"],
            email=f"{user['username']}@example.com"
        )
    except Exception as e:
        logger.error(f"Error getting user info: {str(e)}")
        raise HTTPException(status_code=500, detail=str(e))
