/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			fontFamily: {
				outfit: ['outfit', 'sans-serif'],
				roboto: ['Roboto', 'sans-serif'],
				inspiration: ['Inspiration', 'cursive', 'sans-serif'],
			},
			backgroundImage: {
				gradient: 'linear-gradient(to right, #3c006a,#f74ca4)',
			},
		},
	},
	plugins: [require('tailwind-scrollbar-hide')],
}
