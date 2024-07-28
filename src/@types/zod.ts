import { z } from "zod";

const dotenv = z.object({
  CURRENCY_API_KEY: z
    .string({
      message: "Envalid Currency API key",
    })
    .default(process.env.CURRENCY_API_KEY as string),
});

export type TDotenv = z.infer<typeof dotenv>;
