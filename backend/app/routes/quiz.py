from fastapi import APIRouter

from app.schemas.quiz import QuizRequest
from app.services.gemini_service import generate_quiz

router = APIRouter()


@router.post("/generate-quiz")
def generate_quiz_route(request: QuizRequest):

    questions = generate_quiz(request.text)

    return {
        "questions": questions
    }