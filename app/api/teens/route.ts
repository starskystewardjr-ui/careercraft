import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.formData();

  const data = {
    name: body.get("name"),
    age: body.get("age"),
    city: body.get("city"),
    skills: body.get("skills"),
  };

  return NextResponse.json({ success: true, data });
}