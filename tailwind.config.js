module.exports = {
	purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			borderRadius: {
				'4xl': '37px',
			},
			boxShadow: {
				custom: '0px 4px 0px 1px rgba(0, 0, 0, 0.4)',
			},
			fontFamily: {
				mont: 'Mont',
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
}
