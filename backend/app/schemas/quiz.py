from pydantic import BaseModel
from typing import List


class QuizRequest(BaseModel):
    text: str


class QuizQuestion(BaseModel):
    question: str
    options: List[str]
    answer: str
    explanation: str


class QuizResponse(BaseModel):
    questions: List[QuizQuestion]