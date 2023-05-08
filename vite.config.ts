import dotenv from "dotenv";

import { defineConfig } from "vite";
import solid from "solid-start/vite";

export default defineConfig(() => {
	dotenv.config();

	import("./src/env");

	return {
		plugins: [solid()],
	};
});
