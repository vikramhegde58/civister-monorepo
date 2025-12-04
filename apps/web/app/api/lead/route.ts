import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import { leadSchema } from "@/lib/validation";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const validation = leadSchema.safeParse(body);

    if (!validation.success) {
      return NextResponse.json(
        { error: validation.error.issues },
        { status: 400 }
      );
    }

    const lead = validation.data;
    const filePath = path.join(process.cwd(), "data", "leads.json");
    const dirPath = path.dirname(filePath);

    if (!fs.existsSync(dirPath)) {
        fs.mkdirSync(dirPath, { recursive: true });
    }

    let leads = [];
    if (fs.existsSync(filePath)) {
      const fileContent = fs.readFileSync(filePath, "utf-8");
      if (fileContent) {
          try {
              leads = JSON.parse(fileContent);
          } catch (e) {
              leads = [];
          }
      }
    }

    leads.push({ ...lead, createdAt: new Date().toISOString() });
    fs.writeFileSync(filePath, JSON.stringify(leads, null, 2));

    return NextResponse.json({ success: true, message: "Lead saved successfully" });
  } catch (error) {
    console.error("Error saving lead:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}

