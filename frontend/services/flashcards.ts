export async function generateFlashcards(text: string) {
  const response = await fetch(
    "http://127.0.0.1:8000/generate-flashcards",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        text,
      }),
    }
  );

  if (!response.ok) {
    throw new Error("Failed to generate flashcards");
  }

  return response.json();
}