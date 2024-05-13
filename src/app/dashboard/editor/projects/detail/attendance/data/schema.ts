import { z } from "zod";

// We're keeping a simple non-relational schema here.
// IRL, you will have a schema for your data models.
export const attendance_schema = z.object({
  id: z.string(),
  staff_name: z.string(),
  status: z.string(),
  label: z.string(),
  created_at: z.string(),
  avatar: z.string(),
});

export type AttedanceSchema = z.infer<typeof attendance_schema>;
