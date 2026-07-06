from groq import Groq
from dotenv import load_dotenv
import os

load_dotenv()

client = Groq(
    api_key=os.getenv("GROQ_API_KEY")
)


def summarize_text(text: str) -> str:

    prompt = f"""
You are NOVA AI, an expert university study assistant.

Summarize the following study notes.

Return ONLY Markdown.

Use this format:

# Topic

## 📌 Key Concepts

- Bullet points

## ⭐ Important Points

- Bullet points

## 🎯 Exam Tips

- Bullet points

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
            max_tokens=800

        )

        return response.choices[0].message.content

    except Exception as e:
        return f"Error: {str(e)}"