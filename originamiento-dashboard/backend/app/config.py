from pydantic_settings import BaseSettings

class Settings(BaseSettings):
    # Odoo
    odoo_url: str = "https://odoo-originamiento.argensun.com.ar"
    odoo_user: str = "diego.robalo@argensun.com.ar"
    odoo_password: str = "Arge1205"
    odoo_db: str = "originamiento"
    
    # Claude API
    anthropic_api_key: str = "sk-ant-demo-key"
    
    # Database
    database_url: str = "postgresql://postgres:password@localhost:5432/originamiento"
    db_user: str = "postgres"
    db_password: str = "password"
    db_name: str = "originamiento"
    
    # Backend
    backend_host: str = "0.0.0.0"
    backend_port: int = 8080
    secret_key: str = "password"
    
    # Frontend
    vite_api_url: str = "http://localhost:8080"
    vite_app_name: str = "Originamiento Dashboard"
    
    # Environment
    environment: str = "development"
    
    class Config:
        env_file = ".env"
        case_sensitive = False

settings = Settings()
