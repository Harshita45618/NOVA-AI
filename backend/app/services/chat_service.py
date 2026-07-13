from groq import Groq
from dotenv import load_dotenv
import os

load_dotenv()

client = Groq(
    api_key=os.getenv("GROQ_API_KEY")
)


def chat_with_ai(message: str):

    prompt = f"""
You are NOVA AI, an AI study assistant for college students.

Rules:

- Answer clearly.
- Use Markdown.
- Use headings and bullet points.
- If useful, give examples.
- Keep explanations easy to understand.
- If asked for viva questions, generate them.
- If asked for short notes, summarize.
- If asked for examples, provide examples.

Student Question:

{message}
"""

    response = client.chat.completions.create(

        model="llama-3.3-70b-versatile",

        messages=[
            {
                "role": "user",
                "content": prompt
            }
        ],

        temperature=0.4,
        max_tokens=1200

    )

    return response.choices[0].message.content