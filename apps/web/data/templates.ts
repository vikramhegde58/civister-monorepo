export interface Template {
  id: string;
  title: string;
  plotSize: "30x40" | "40x60" | "custom";
  facing: ("North" | "East" | "West" | "South")[];
  floors: number;
  bedrooms: number;
  vastu: boolean;
  image2D: string;
  model3D?: string; // optional GLB file path
  description: string;
}

export const templates: Template[] = [
  {
    id: "t1",
    title: "Modern 3BHK Duplex",
    plotSize: "30x40",
    facing: ["North", "East"],
    floors: 2,
    bedrooms: 3,
    vastu: true,
    image2D: "https://placehold.co/600x400/png?text=Modern+3BHK+Duplex+Plan",
    description: "A compact yet spacious duplex design perfect for urban living.",
  },
  {
    id: "t2",
    title: "Luxury 4BHK Villa",
    plotSize: "40x60",
    facing: ["East", "South"],
    floors: 2,
    bedrooms: 4,
    vastu: true,
    image2D: "https://placehold.co/600x400/png?text=Luxury+4BHK+Villa+Plan",
    description: "Spacious villa with a garden and modern amenities.",
  },
  {
    id: "t3",
    title: "Compact 2BHK Starter",
    plotSize: "30x40",
    facing: ["West", "South"],
    floors: 1,
    bedrooms: 2,
    vastu: false,
    image2D: "https://placehold.co/600x400/png?text=Compact+2BHK+Plan",
    description: "Efficient layout for small families.",
  },
  {
    id: "t4",
    title: "Grand 5BHK Residence",
    plotSize: "40x60",
    facing: ["North"],
    floors: 3,
    bedrooms: 5,
    vastu: true,
    image2D: "https://placehold.co/600x400/png?text=Grand+5BHK+Plan",
    description: "Multi-generational home with ample space.",
  },
  {
    id: "t5",
    title: "Minimalist 3BHK",
    plotSize: "30x40",
    facing: ["East"],
    floors: 2,
    bedrooms: 3,
    vastu: true,
    image2D: "https://placehold.co/600x400/png?text=Minimalist+3BHK+Plan",
    description: "Clean lines and functional spaces.",
  },
];
