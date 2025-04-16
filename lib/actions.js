"use server";

import { redirect } from "next/navigation";
import { saveMeal } from "./meals";

const isInvalidText = (text) => {
  return !text || text.trim().length === 0;
};

export const shareMeal = async (prevState, formData) => {
  const meal = {
    title: formData.get("title"),
    summary: formData.get("summary"),
    instructions: formData.get("instructions"),
    image: formData.get("image"),
    creator: formData.get("name"),
    creator_email: formData.get("email"),
  };

  if (isInvalidText(meal.title)) {
    return {
      message: "Title is required!",
    };
  }

  if (isInvalidText(meal.summary)) {
    throw new Error("Summary is required!");
  }

  if (isInvalidText(meal.instructions)) {
    throw new Error("Instructions are required!");
  }

  if (isInvalidText(meal.creator)) {
    throw new Error("Creator name is required!");
  }

  if (isInvalidText(meal.creator_email)) {
    throw new Error("Creator email is required!");
  }

  if (!meal.image) {
    throw new Error("Image is required!");
  }

  await saveMeal(meal);
  redirect("/meals");
};
