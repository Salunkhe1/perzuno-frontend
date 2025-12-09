// frontend-vite/src/Services/userService.js

export const createUser = async (formData) => {
  // Backend URL
  const BACKEND_URL = import.meta.env.VITE_BACKEND_URL || "http://localhost:5000";

  const response = await fetch(`${BACKEND_URL}/api/users/contact`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(formData),
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || "Something went wrong");
  }

  return await response.json();
};
