"use server";

import { redirect } from "next/navigation";
import { saveMeal } from "./meals";
import { revalidatePath } from "next/cache";

function validateMealData(data) {
  return !data || data.trim() === "";
}

export async function shareMeal(prevState, e) {
  const meal = {
    title: e.get("title"),
    summary: e.get("summary"),
    instructions: e.get("instructions"),
    image: e.get("image"),
    creator: e.get("name"),
    creator_email: e.get("email"),
  };

  if (
    validateMealData(meal.title) ||
    validateMealData(meal.summary) ||
    validateMealData(meal.instructions) ||
    validateMealData(meal.creator) ||
    validateMealData(meal.creator_email) ||
    !meal.creator_email.include("@") ||
    !meal.image ||
    meal.image.size === 0
  ) {
    return {
      message: "Invalid input please check your data.",
    };
  }
  await saveMeal(meal);
  revalidatePath("/meals", "layout");
  redirect("/meals");
}
