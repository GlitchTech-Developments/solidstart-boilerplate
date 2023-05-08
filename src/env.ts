// src/env.mjs
import { createEnv } from "@t3-oss/env-core";
import { z } from "zod";

export const env = createEnv({
	skipValidation:
		!!process.env.SKIP_ENV_VALIDATION &&
		process.env.SKIP_ENV_VALIDATION !== "false" &&
		process.env.SKIP_ENV_VALIDATION !== "0",
	/*
	 * Specify what prefix the client-side variables must have.
	 * This is enforced both on type-level and at runtime.
	 */
	clientPrefix: "PUBLIC_",
	server: {
		DATABASE_URL: z.string().url(),
	},
	client: {
		PUBLIC_VARIABLE: z.string().min(1),
	},
	/**
	 * What object holds the environment variables at runtime.
	 * Often `process.env` or `import.meta.env`
	 */
	runtimeEnv: process.env,
});
