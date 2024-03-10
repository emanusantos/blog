/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			screens: {
				'2xl': { max: '2560px' },
				// => @media (max-width: 2560px) { ... }

				xl: { max: '1440px' },
				// => @media (max-width: 1440px) { ... }

				lg: { max: '1024px' },
				// => @media (max-width: 1024px) { ... }

				md: { max: '768px' },
				// => @media (max-width: 768px) { ... }

				sm: { max: '425px' }
				// => @media (max-width: 425px) { ... }
			}
		}
	},
	plugins: []
};
