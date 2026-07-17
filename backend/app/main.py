from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.routes import ai
from app.routes import pdf
from app.routes import quiz
from app.routes import flashcards
from app.routes import chat
from app.routes import planner

app = FastAPI(
    title="NOVA AI Backend",
    description="AI-powered Student Workspace Backend API",
    version="1.0.0",
    docs_url="/docs",
    redoc_url="/redoc",
)

# CORS
app.add_middleware(
    CORSMiddleware,
    # Change this in production
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Register Routes
app.include_router(ai.router, tags=["Summary"])
app.include_router(pdf.router, tags=["PDF"])
app.include_router(quiz.router, tags=["Quiz"])
app.include_router(flashcards.router, tags=["Flashcards"])
app.include_router(chat.router, tags=["AI Chat"])
app.include_router(planner.router, tags=["Study Planner"])


@app.get("/", tags=["Health"])
def root():
    return {
        "success": True,
        "message": "🚀 NOVA AI Backend Running Successfully!"
    }