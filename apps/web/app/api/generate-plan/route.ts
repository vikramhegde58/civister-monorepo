import { NextResponse } from "next/server";
import { FloorPlanGenerator } from "@/lib/generator/engine";
import { GeneratorConfig } from "@/lib/generator/types";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    
    const config: GeneratorConfig = {
        plotLength: Number(body.plotLength) || 40,
        plotWidth: Number(body.plotWidth) || 30,
        facing: body.facing || "North",
        bedrooms: Number(body.bedrooms) || 2,
        floors: Number(body.floors) || 1,
        vastu: body.vastu === "true" || body.vastu === true
    };

    const engine = new FloorPlanGenerator(config);
    const plan = engine.generate();

    return NextResponse.json({ plan });
  } catch (error) {
    console.error("Error generating plan:", error);
    return NextResponse.json(
      { error: "Failed to generate plan" },
      { status: 500 }
    );
  }
}

