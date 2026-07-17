import fitz
import re


def extract_text_from_pdf(file) -> str:
    """
    Extract readable text from a PDF.

    Returns cleaned text that can be passed directly
    to the AI services.
    """

    try:

        pdf = fitz.open(
            stream=file.file.read(),
            filetype="pdf"
        )

        pages = []

        for page in pdf:

            text = page.get_text("text")

            if text:
                pages.append(text)

        pdf.close()

        full_text = "\n".join(pages)

        # Normalize whitespace
        full_text = re.sub(r"\r", "", full_text)
        full_text = re.sub(r"\t", " ", full_text)
        full_text = re.sub(r" +", " ", full_text)
        full_text = re.sub(r"\n{3,}", "\n\n", full_text)

        return full_text.strip()

    except Exception as e:
        raise Exception(f"Unable to read PDF: {str(e)}")