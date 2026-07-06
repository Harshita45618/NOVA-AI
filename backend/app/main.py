from fastapi.middleware.cors import CORSMiddleware
from fastapi import FastAPI
from app.routes.ai import router as ai_router

app = FastAPI(
    title="NOVA AI API",
    description="AI-powered student workspace backend",
    version="1.0.0",
)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
app.include_router(ai_router)


@app.get("/")
def root():
    return {
        "message": "Welcome to NOVA AI Backend 🚀",
        "status": "Running Successfully",
    }