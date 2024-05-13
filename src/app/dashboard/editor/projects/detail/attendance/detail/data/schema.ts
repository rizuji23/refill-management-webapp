import { z } from "zod";

// We're keeping a simple non-relational schema here.
// IRL, you will have a schema for your data models.
export const attendance_detail_schema = z.object({
  id: z.string(),
  label: z.string(),
  clock_in: z.string(),
  clock_out: z.string(),
  status: z.string(),
  created_at: z.string(),
});

export type AttedanceHistorySchema = z.infer<typeof attendance_detail_schema>;
