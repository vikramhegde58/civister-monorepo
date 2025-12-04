import { NextResponse } from "next/server";
import { findBestMatch } from "@/lib/matching";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    // Add basic validation here if needed, but matching logic is robust enough to handle most inputs
    const bestMatch = findBestMatch(body);

    return NextResponse.json({ match: bestMatch });
  } catch (error) {
    console.error("Error matching template:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}

