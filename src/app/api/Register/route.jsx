import { NextResponse } from "next/server";
import { users } from "@/app/lib/usersStore";

export async function POST(req) {
  const { username, email, password } = await req.json();

  const existingUser = users.find(u => u.email === email);
  if (existingUser) {
    return NextResponse.json(
      { message: "User already registered" },
      { status: 400 }
    );
  }

  users.push({ username, email, password });

  return NextResponse.json({ message: "Registered successfully" });
}