/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	safelist: [
		'xs:top-4',
		'xs:bottom-4',
		'xs:left-4',
		'xs:right-4',
		'bg-[#444]',
		'bg-[#3498DB]',
		'bg-[#27AE60]',
		'bg-[#E74C3C]',
	],
	theme: {
		extend: {
			keyframes: {
				'translate-right': {
					'0%': {
						transform: 'translateX(100%)',
						opacity: '0%',
					},
					'100%': {
						transform: 'translateX(0)',
						opacity: '100%',
					},
					// '20%': {
					// 	transform: 'translateX(0)',
					// 	opacity: '100%',
					// 	scale: '1',
					// },
					// '80%': {
					// 	transform: 'translateX(0)',
					// 	opacity: '100%',
					// 	scale: '1',
					// },
					// '100%': {
					// 	transform: 'translateX(100%)',
					// 	opacity: '0%',
					// 	scale: '1',
					// },
				},
			},
			animation: {
				'translate-right': 'translate-right 0.75s ease-in-out',
			},
		},
		screens: {
			xs: { min: '375px' },
			sm: { min: '768px' },
			md: { min: '1024px' },
			lg: { min: '1440px' },
			xl: { min: '1920px' },
		},
	},
	plugins: [],
};
