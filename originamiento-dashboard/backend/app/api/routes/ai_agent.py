from fastapi import APIRouter, Depends, HTTPException
from pydantic import BaseModel
from typing import List, Optional
from datetime import datetime
from app.services.ai_service import ai_service
import logging

logger = logging.getLogger(__name__)

router = APIRouter()


class ChatRequest(BaseModel):
    question: str
    context: Optional[str] = None


class ChatResponse(BaseModel):
    question: str
    answer: str
    sources: Optional[List[str]] = None
    created_at: datetime


@router.post("/ask", response_model=ChatResponse)
def ask_ai_agent(request: ChatRequest):
    """Ask a question to the AI agent with context from Odoo data"""
    try:
        response = ai_service.ask(request.question, request.context)
        return ChatResponse(
            question=request.question,
            answer=response.get("answer", ""),
            sources=response.get("sources"),
            created_at=datetime.now()
        )
    except Exception as e:
        logger.error(f"Error asking AI agent: {str(e)}")
        raise HTTPException(status_code=500, detail=str(e))


@router.get("/conversation/history")
def get_conversation_history():
    """Get AI conversation history"""
    try:
        history = ai_service.get_history()
        return {"history": history}
    except Exception as e:
        logger.error(f"Error fetching conversation history: {str(e)}")
        return {"history": [], "error": str(e)}


@router.post("/conversation/reset")
def reset_conversation():
    """Reset AI conversation history"""
    try:
        ai_service.reset_history()
        return {"message": "Conversation history reset"}
    except Exception as e:
        logger.error(f"Error resetting conversation: {str(e)}")
        return {"error": str(e)}


@router.post("/analyze/products")
def analyze_products_endpoint():
    """Get AI analysis of products"""
    try:
        analysis = ai_service.analyze_products()
        return {"analysis": analysis}
    except Exception as e:
        logger.error(f"Error analyzing products: {str(e)}")
        return {"error": str(e)}


@router.post("/analyze/orders")
def analyze_orders_endpoint():
    """Get AI analysis of orders"""
    try:
        analysis = ai_service.analyze_orders()
        return {"analysis": analysis}
    except Exception as e:
        logger.error(f"Error analyzing orders: {str(e)}")
        return {"error": str(e)}


@router.get("/chat-history/db")
def get_chat_history_db(limit: int = 50):
    """Get chat history from database"""
    try:
        history = ai_service.get_db_history(limit=limit)
        return {"history": history, "count": len(history)}
    except Exception as e:
        logger.error(f"Error fetching chat history: {str(e)}")
        return {"history": [], "count": 0, "error": str(e)}
