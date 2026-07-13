from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

# Routes
from app.routes import ai
from app.routes import pdf
from app.routes import quiz
from app.routes import flashcards
from app.routes import chat

app = FastAPI(
    title="NOVA AI Backend",
    description="AI-powered student workspace backend",
    version="1.0.0"
)

# CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Routes
app.include_router(ai.router)
app.include_router(pdf.router)
app.include_router(quiz.router)
app.include_router(flashcards.router)
app.include_router(chat.router)


@app.get("/")
def root():
    return {
        "message": "🚀 NOVA AI Backend Running Successfully!"
    }