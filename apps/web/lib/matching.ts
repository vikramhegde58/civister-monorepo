import { Template, templates } from "@/data/templates";
import { StoreState } from "@/store/useStore";

type Criteria = {
  plotSize: string;
  facing: string;
  floors: number;
  bedrooms: number;
  vastu: boolean;
};

export function findBestMatch(criteria: Criteria): Template | null {
  let bestMatch: Template | null = null;
  let highestScore = -1;

  templates.forEach((template) => {
    let score = 0;

    // Plot Size Priority (Critical)
    if (template.plotSize === criteria.plotSize) {
      score += 50;
    } else if (criteria.plotSize === "custom") {
        // If user has custom plot, we can suggest anything but maybe prioritize 40x60 if large?
        // For now, treat all as potential, but lower score than exact match
        score += 20; 
    }

    // Facing Priority
    if (template.facing.includes(criteria.facing as any)) {
      score += 30;
    }

    // Bedroom match
    if (template.bedrooms === criteria.bedrooms) {
      score += 20;
    } else if (Math.abs(template.bedrooms - criteria.bedrooms) <= 1) {
        score += 10;
    }

    // Floors match
    if (template.floors === criteria.floors) {
        score += 15;
    }

    // Vastu match
    if (criteria.vastu && template.vastu) {
        score += 10;
    }

    if (score > highestScore) {
      highestScore = score;
      bestMatch = template;
    }
  });

  return bestMatch;
}

