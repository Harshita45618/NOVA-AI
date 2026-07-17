from fastapi import APIRouter, HTTPException

from app.schemas.chat import ChatRequest
from app.services.chat_service import chat_with_ai

router = APIRouter()


@router.post("/chat")
def chat(request: ChatRequest):

    try:

        if not request.message.strip():
            raise HTTPException(
                status_code=400,
                detail="Message cannot be empty."
            )

        answer = chat_with_ai(request.message)

        if answer.startswith("Error:"):
            raise HTTPException(
                status_code=500,
                detail=answer
            )

        return {
            "success": True,
            "answer": answer
        }

    except HTTPException:
        raise

    except Exception as e:
        raise HTTPException(
            status_code=500,
            detail=f"Chat service failed: {str(e)}"
        )