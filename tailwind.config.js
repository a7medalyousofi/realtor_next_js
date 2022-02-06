module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
		"./.d.ts",
	],
	theme: {},
	plugins: [require("@tailwindcss/forms")],
};
