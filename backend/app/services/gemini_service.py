from groq import Groq
from dotenv import load_dotenv
import os
import json

load_dotenv()

MODEL = "llama-3.3-70b-versatile"

client = Groq(
    api_key=os.getenv("GROQ_API_KEY")
)

# ==========================================================
# AI SUMMARY
# ==========================================================

def summarize_text(text: str) -> str:

    system_prompt = """
You are NOVA AI, an expert engineering professor and AI study mentor.

Your goal is to convert raw study material into high-quality revision notes.

Always use Markdown.

Never return code fences.

Make the notes exam-ready, easy to revise, and easy to understand.
"""

    user_prompt = f"""
Read the following study material carefully.

Generate structured revision notes.

Return ONLY Markdown.

Follow this structure exactly.

# Topic

## Overview

Write a short overview of the topic.

## Key Concepts

- Explain every important concept.
- Use bullet points.
- Keep explanations simple.

## Important Definitions

Include all important definitions.

## Working / Process

Explain any algorithm, architecture, workflow or process.

## Formulae

Include formulas if present.

## Examples

Give practical or real-world examples.

## Advantages

- Bullet points

## Limitations

- Bullet points

## Interview / Viva Questions

Generate 5 important viva questions.

## Exam Tips

Mention commonly asked topics.

## Quick Revision

Provide a one-minute revision summary.

Rules

- Markdown only
- No code fences
- Highlight important keywords using **bold**
- Use tables whenever useful
- Never omit important concepts

Study Material

{text}
"""

    try:

        response = client.chat.completions.create(

            model=MODEL,

            messages=[
                {
                    "role": "system",
                    "content": system_prompt,
                },
                {
                    "role": "user",
                    "content": user_prompt,
                },
            ],

            temperature=0.25,
            max_tokens=1400,

        )

        return response.choices[0].message.content

    except Exception as e:
        return f"Error: {str(e)}"


# ==========================================================
# AI QUIZ
# ==========================================================
def generate_quiz(text: str):

    system_prompt = """
You are NOVA AI, an expert university professor.

Your task is to create high-quality university-level MCQs.

Always return ONLY valid JSON.

Never return Markdown.

Never use code blocks.

Never write explanations outside the JSON.
"""

    user_prompt = f"""
Generate exactly 10 multiple-choice questions from the study material.

Difficulty Distribution

- 4 Easy
- 4 Medium
- 2 Hard

Rules

- Test conceptual understanding.
- Every question must have exactly 4 options.
- Only ONE option is correct.
- Wrong options should be realistic.
- Avoid duplicate questions.
- Include a short explanation for each answer.

Return ONLY this JSON format.

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

Do not return markdown.

Study Material

{text}
"""

    try:

        response = client.chat.completions.create(

            model=MODEL,

            messages=[
                {
                    "role": "system",
                    "content": system_prompt,
                },
                {
                    "role": "user",
                    "content": user_prompt,
                },
            ],

            temperature=0.2,
            max_tokens=2200,

        )

        quiz = response.choices[0].message.content.strip()

        if quiz.startswith("```json"):
            quiz = quiz.replace("```json", "").replace("```", "").strip()
        elif quiz.startswith("```"):
            quiz = quiz.replace("```", "").strip()

        return json.loads(quiz)

    except json.JSONDecodeError:
        return {
            "error": "Invalid JSON returned by AI."
        }

    except Exception as e:
        return {
            "error": str(e)
        }

def generate_study_plan(
    exam: str,
    subjects: list[str],
    hours: int,
    days: int,
):

    system_prompt = """
You are NOVA AI, an expert study planner.

Create realistic and practical study schedules for engineering students.

Always return Markdown.

Never use code fences.
"""

    user_prompt = f"""
Create a personalized study roadmap.

Student Profile

Target Exam:
{exam}

Subjects:
{', '.join(subjects)}

Study Hours Per Day:
{hours}

Days Remaining:
{days}

Return ONLY Markdown.

Follow this structure exactly.

# 📚 AI Study Plan

## 🎯 Goal

Write a short study objective.

## 📅 Daily Timetable

Create a realistic timetable using exactly {hours} study hours.

Mention breaks whenever appropriate.

## 📘 Subject Priority

Explain why subjects are ordered this way.

## 📈 Weekly Milestones

Create milestones for every week.

## 🔁 Revision Strategy

Explain when and how revision should happen.

## 📝 Mock Test Plan

Mention mock test frequency.

## ⚡ Weak Subject Strategy

Explain how to improve weak subjects.

## 🚀 Final Week Plan

Explain what should be done in the final week.

## 💡 Productivity Tips

Give at least 5 practical tips.

## 🌟 Motivation

End with a short motivational message.

Rules

- Markdown only.
- No code blocks.
- No introduction before the heading.
- Make the plan practical and realistic.
"""

    try:

        response = client.chat.completions.create(

            model=MODEL,

            messages=[
                {
                    "role": "system",
                    "content": system_prompt,
                },
                {
                    "role": "user",
                    "content": user_prompt,
                },
            ],

            temperature=0.3,
            max_tokens=1500,

        )

        return response.choices[0].message.content

    except Exception as e:
        return f"Error: {str(e)}"