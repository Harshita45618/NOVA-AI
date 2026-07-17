from fastapi import APIRouter, HTTPException

from app.schemas.planner import PlannerRequest
from app.services.gemini_service import generate_study_plan

router = APIRouter()


@router.post("/generate-study-plan")
def generate_plan(request: PlannerRequest):

    try:

        if not request.exam.strip():
            raise HTTPException(
                status_code=400,
                detail="Exam name cannot be empty."
            )

        if not request.subjects:
            raise HTTPException(
                status_code=400,
                detail="Please provide at least one subject."
            )

        if request.hours_per_day <= 0:
            raise HTTPException(
                status_code=400,
                detail="Study hours per day must be greater than 0."
            )

        if request.days_left <= 0:
            raise HTTPException(
                status_code=400,
                detail="Days left must be greater than 0."
            )

        plan = generate_study_plan(
            exam=request.exam,
            subjects=request.subjects,
            hours=request.hours_per_day,
            days=request.days_left,
        )

        if isinstance(plan, str) and plan.startswith("Error:"):
            raise HTTPException(
                status_code=500,
                detail=plan
            )

        return {
            "success": True,
            "plan": plan
        }

    except HTTPException:
        raise

    except Exception as e:
        raise HTTPException(
            status_code=500,
            detail=f"Failed to generate study plan: {str(e)}"
        )