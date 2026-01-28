
import { NextResponse } from "next/server";
import { users } from "@/app/lib/usersStore";

export async function POST(req) {
  const { email, password } = await req.json();

  const user = users.find(u => u.email === email);

  if (!user) {
    return NextResponse.json(
      { message: "User not registered" },
      { status: 401 }
    );
  }





  if (user.password !== password) {
    return NextResponse.json(
      { message: "Wrong password" },
      { status: 401 }
    );
  }

  return NextResponse.json({
    message: "Login successful",
    token: "dummy-token"
  });
}