from groq import Groq
from dotenv import load_dotenv
import os
import json

load_dotenv()

print("GROQ_API_KEY =", os.getenv("GROQ_API_KEY"))

client = Groq(
    api_key=os.getenv("GROQ_API_KEY")
)

# =========================
# AI SUMMARY
# =========================

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


# =========================
# AI QUIZ
# =========================

def generate_quiz(text: str):

    prompt = f"""
You are NOVA AI.

Generate exactly 10 multiple choice questions from the study notes.

Return ONLY valid JSON.

Use this exact format:

[
  {{
    "question":"Question here",
    "options":[
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    "answer":"Correct Option",
    "explanation":"Short explanation"
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

            temperature=0.2,
            max_tokens=2000

        )

        quiz = response.choices[0].message.content.strip()

        # Remove markdown code fences if Groq returns them
        if quiz.startswith("```json"):
            quiz = quiz.replace("```json", "").replace("```", "").strip()
        elif quiz.startswith("```"):
            quiz = quiz.replace("```", "").strip()

        return json.loads(quiz)

    except Exception as e:
        return {
            "error": str(e)
        }