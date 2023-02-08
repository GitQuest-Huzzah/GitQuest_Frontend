/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./src/**/*.html',
		'./src/**/*.vue',
		'./src/**/*.jsx',
		'./src/**/*.js',
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
