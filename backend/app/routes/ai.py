from fastapi import APIRouter, HTTPException

from app.schemas.summary import SummaryRequest
from app.services.gemini_service import summarize_text

router = APIRouter()


@router.post("/summarize")
def summarize(request: SummaryRequest):

    try:

        if not request.text.strip():
            raise HTTPException(
                status_code=400,
                detail="Study material cannot be empty."
            )

        summary = summarize_text(request.text)

        if summary.startswith("Error:"):
            raise HTTPException(
                status_code=500,
                detail=summary
            )

        return {
            "success": True,
            "summary": summary
        }

    except HTTPException:
        raise

    except Exception as e:
        raise HTTPException(
            status_code=500,
            detail=f"Failed to generate summary: {str(e)}"
        )