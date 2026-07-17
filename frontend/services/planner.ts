export async function generateStudyPlan(
  exam: string,
  subjects: string[],
  hoursPerDay: number,
  daysLeft: number
) {
  const response = await fetch(
    "http://127.0.0.1:8000/generate-study-plan",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        exam,
        subjects,
        hours_per_day: hoursPerDay,
        days_left: daysLeft,
      }),
    }
  );

  if (!response.ok) {
    throw new Error("Failed to generate study plan");
  }

  return response.json();
}