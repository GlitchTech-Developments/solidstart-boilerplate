const presetCssNanoPackage = require("cssnano-preset-advanced");
const presetCssNano = presetCssNanoPackage({ discardComments: true });

module.exports = {
	plugins: {
		tailwindcss: {
			config: "./tailwindcss-config.ts",
		},
		autoprefixer: {},
		cssnano: {
			preset: presetCssNano,
		},
	},
};
