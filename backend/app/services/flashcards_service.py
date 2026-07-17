from groq import Groq
from dotenv import load_dotenv
import os
import json

load_dotenv()

MODEL = "llama-3.3-70b-versatile"

client = Groq(
    api_key=os.getenv("GROQ_API_KEY")
)


def generate_flashcards(text: str):

    if not text.strip():
        return {
            "error": "No study material provided."
        }

    system_prompt = """
You are NOVA AI, an expert engineering professor.

Your job is to create high-quality flashcards that help students revise quickly.

Always return ONLY valid JSON.

Never use Markdown.

Never use code blocks.
"""

    user_prompt = f"""
Create exactly 10 flashcards from the study material.

Rules

- Cover the most important concepts.
- Questions should test understanding, not just memorization.
- Answers should be concise (1–3 sentences).
- Avoid duplicate questions.
- Use simple language.

Return ONLY this JSON format.

[
    {{
        "question": "Question",
        "answer": "Answer"
    }}
]

Study Material

{text}
"""

    try:

        response = client.chat.completions.create(

            model=MODEL,

            messages=[
                {
                    "role": "system",
                    "content": system_prompt
                },
                {
                    "role": "user",
                    "content": user_prompt
                }
            ],

            temperature=0.25,
            max_tokens=1500

        )

        content = response.choices[0].message.content.strip()

        if content.startswith("```json"):
            content = content.replace("```json", "").replace("```", "").strip()
        elif content.startswith("```"):
            content = content.replace("```", "").strip()

        return json.loads(content)

    except json.JSONDecodeError:
        return {
            "error": "Invalid JSON returned by AI."
        }

    except Exception as e:
        return {
            "error": str(e)
        }