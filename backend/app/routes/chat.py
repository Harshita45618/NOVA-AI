from fastapi import APIRouter

from app.schemas.chat import ChatRequest
from app.services.chat_service import chat_with_ai

router = APIRouter()


@router.post("/chat")
def chat(request: ChatRequest):

    answer = chat_with_ai(request.message)

    return {
        "answer": answer
    }