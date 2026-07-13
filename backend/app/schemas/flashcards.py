from pydantic import BaseModel

class FlashcardRequest(BaseModel):
    text: str