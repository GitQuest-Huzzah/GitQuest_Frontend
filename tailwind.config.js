/** @type {import('tailwindcss').Config} */
exports = {
	  content: [
		'./**/*.html',
		'./**/*.vue',
		'./**/*.jsx',
		'./**/*.js',
		'./src/**/*.ts',
		'./src/**/*.tsx',
	],
	theme: {
		extend: {
			fontFamily: {
				doom: ['"MedievalTimes"', 'sans-serif'],
                medieval: ['"MedievalTimes"', 'sans-serif'],
			},
		},
	},
	plugins: [],
	darkMode: 'class',
    fontPath: './fonts',
};
