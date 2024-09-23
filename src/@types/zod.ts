import { z } from "zod";

const dotenv = z.object({
  CURRENCY_API_KEY: z
    .string({
      message: "Envalid Currency API key",
    })
    .default("fca_live_gQR1fHhRRRXR2Js9swo6DEffmbMmnJlCfqOLbo52"),
});

export type TDotenv = z.infer<typeof dotenv>;
