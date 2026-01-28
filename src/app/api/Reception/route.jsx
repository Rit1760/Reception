import { NextResponse } from "next/server"

export async function POST(req) {
  try {
    const body = await req.json()

    if (!body.companyName || !body.mobile) {
      return NextResponse.json(
        { message: "Required fields missing" },
        { status: 400 }
      )
    }

    console.log("Received Data:", body)

    return NextResponse.json(
      { message: "Form submitted successfully" },
      { status: 200 }
    )

  } catch (error) {
    return NextResponse.json(
      { message: "Server error" },
      { status: 500 }
    )
  }
}