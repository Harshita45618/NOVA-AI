from fastapi import APIRouter

from app.schemas.flashcards import FlashcardRequest
from app.services.flashcards_service import generate_flashcards

router = APIRouter()


@router.post("/generate-flashcards")
def flashcards(request: FlashcardRequest):

    flashcards = generate_flashcards(request.text)

    return {
        "flashcards": flashcards
    }