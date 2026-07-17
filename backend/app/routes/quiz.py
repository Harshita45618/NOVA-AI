from fastapi import APIRouter, HTTPException

from app.schemas.quiz import QuizRequest
from app.services.gemini_service import generate_quiz

router = APIRouter()


@router.post("/generate-quiz")
def generate_quiz_route(request: QuizRequest):

    try:

        if not request.text.strip():
            raise HTTPException(
                status_code=400,
                detail="Study material cannot be empty."
            )

        questions = generate_quiz(request.text)

        if isinstance(questions, dict) and "error" in questions:
            raise HTTPException(
                status_code=500,
                detail=questions["error"]
            )

        return {
            "success": True,
            "questions": questions
        }

    except HTTPException:
        raise

    except Exception as e:
        raise HTTPException(
            status_code=500,
            detail=f"Failed to generate quiz: {str(e)}"
        )