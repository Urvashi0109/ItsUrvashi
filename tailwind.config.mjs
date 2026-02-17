/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
    container: {
			center: true,
      padding: '1rem',
			screens: {
				xl: '1280px'
			}
		},
		extend: {
      typography: {
        DEFAULT: {
          css: {
            maxWidth: '100%',
          }
        }
      },
      colors: {
        primary: {
          DEFAULT: '#3b82f6',
          dark: '#60a5fa',
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5da',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
        },
        secondary: {
          DEFAULT: '#10b981',
          dark: '#34d399',
        },
        accent: {
          DEFAULT: '#f59e0b',
          dark: '#fbbf24',
        },
      },
    },
	},
	plugins: [
		require('@tailwindcss/typography'),
	],
}
