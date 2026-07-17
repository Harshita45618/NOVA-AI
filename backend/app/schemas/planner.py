from pydantic import BaseModel


class PlannerRequest(BaseModel):
    exam: str
    subjects: list[str]
    hours_per_day: int
    days_left: int