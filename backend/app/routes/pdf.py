from fastapi import APIRouter, UploadFile, File, HTTPException
from app.services.pdf_service import extract_text_from_pdf

router = APIRouter()

MAX_FILE_SIZE = 10 * 1024 * 1024  # 10 MB


@router.post("/upload-pdf")
async def upload_pdf(file: UploadFile = File(...)):

    try:

        # Check if a file was uploaded
        if not file:
            raise HTTPException(
                status_code=400,
                detail="No file uploaded."
            )

        # Validate file type
        if file.content_type != "application/pdf":
            raise HTTPException(
                status_code=400,
                detail="Only PDF files are allowed."
            )

        # Validate file size
        content = await file.read()

        if len(content) > MAX_FILE_SIZE:
            raise HTTPException(
                status_code=413,
                detail="PDF size exceeds the 10 MB limit."
            )

        # Reset file pointer after reading
        file.file.seek(0)

        text = extract_text_from_pdf(file)

        if not text.strip():
            raise HTTPException(
                status_code=400,
                detail="No readable text found in the PDF."
            )

        return {
            "success": True,
            "text": text
        }

    except HTTPException:
        raise

    except Exception as e:
        raise HTTPException(
            status_code=500,
            detail=f"Failed to process PDF: {str(e)}"
        )