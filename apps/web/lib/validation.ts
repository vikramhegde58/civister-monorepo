import { z } from "zod";

export const leadSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Phone number must be at least 10 digits"),
  requirements: z.string().optional(),
  templateId: z.string().optional(),
});

export type Lead = z.infer<typeof leadSchema>;

