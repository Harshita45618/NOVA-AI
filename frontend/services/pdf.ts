const API_URL = "http://127.0.0.1:8000";

export async function uploadPDF(file: File) {
  const formData = new FormData();

  formData.append("file", file);

  const response = await fetch(`${API_URL}/upload-pdf`, {
    method: "POST",
    body: formData,
  });

  if (!response.ok) {
    throw new Error("Failed to upload PDF");
  }

  return response.json();
}