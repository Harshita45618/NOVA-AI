from fastapi import APIRouter, HTTPException

from app.schemas.flashcards import FlashcardRequest
from app.services.flashcards_service import generate_flashcards

router = APIRouter()


@router.post("/generate-flashcards")
def flashcards(request: FlashcardRequest):

    try:

        if not request.text.strip():
            raise HTTPException(
                status_code=400,
                detail="Study material cannot be empty."
            )

        flashcards = generate_flashcards(request.text)

        if isinstance(flashcards, dict) and "error" in flashcards:
            raise HTTPException(
                status_code=500,
                detail=flashcards["error"]
            )

        return {
            "success": True,
            "flashcards": flashcards
        }

    except HTTPException:
        raise

    except Exception as e:
        raise HTTPException(
            status_code=500,
            detail=f"Failed to generate flashcards: {str(e)}"
        )