import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'dark': '#424245',
        'dark-light': '#6E6E73',
        'concrete': '#95A5A6',
        'greensea': '#16A085',
        'pomegranate': '#C0392B',
        'belizehole': '#2980B9',
        'grey': '#efefef',
        'scream': '#F5F5F7'
      },
      lineHeight: {
        '14': '3.5rem'
      }
    },
  },
  plugins: [],
}
export default config
