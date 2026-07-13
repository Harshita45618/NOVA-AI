from groq import Groq
from dotenv import load_dotenv
import os
import json

load_dotenv()

client = Groq(
    api_key=os.getenv("GROQ_API_KEY")
)


def generate_flashcards(text: str):

    prompt = f"""
You are NOVA AI, an expert university study assistant.

Create 10 flashcards from the study notes.

Return ONLY valid JSON.

Format:

[
    {{
        "question": "...",
        "answer": "..."
    }}
]

Study Notes:

{text}
"""

    try:

        response = client.chat.completions.create(

            model="llama-3.3-70b-versatile",

            messages=[
                {
                    "role": "user",
                    "content": prompt
                }
            ],

            temperature=0.3,
            max_tokens=1200,

            response_format={
                "type": "json_object"
            }

        )

        content = response.choices[0].message.content

        data = json.loads(content)

        # Handle both possible Groq outputs
        if isinstance(data, list):
            return data

        if "flashcards" in data:
            return data["flashcards"]

        return data

    except Exception as e:
        return {
            "error": str(e)
        }