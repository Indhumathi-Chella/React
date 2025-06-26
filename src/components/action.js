"use server";

export default async function updateName(prevState, formData) {
  const name = formData.get("name");
  if (!name) {
    return { error: "Name is required" };
  }
  return { success: true };
}
