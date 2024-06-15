"use server";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function loginAction(formData) {
  console.log(formData.get("username"));
  console.log(formData.get("password"));
  cookies().set("currentuser", formData.get("username"), { httpOnly: true });
  redirect("/");
}
