"use server";

import { redirect } from "next/navigation";
import { saveMeal } from "./meals";

export async function shareMeal(e) {
  const meal = {
    title: e.get("title"),
    summary: e.get("summary"),
    instructions: e.get("instructions"),
    image: e.get("image"),
    creator: e.get("name"),
    creator_email: e.get("email"),
  };

  await saveMeal(meal);
  redirect("/meals");
}
