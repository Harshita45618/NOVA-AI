from fastapi import APIRouter, UploadFile, File

from app.services.pdf_service import extract_text_from_pdf

router = APIRouter()


@router.post("/upload-pdf")
async def upload_pdf(file: UploadFile = File(...)):
    text = extract_text_from_pdf(file)

    return {
        "text": text
    }