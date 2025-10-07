/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './app/**/*.{js,ts,jsx,tsx}',
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
        './src/**/*.{js,ts,jsx,tsx}',
        "./node_modules/preline/preline.js",
    ],
    theme: {
        extend: {
            fontFamily: {
                heading: ['"Cabinet Grotesk"', 'sans-serif'],
            },
            colors: {
                primary: '#059669',
                dark: '#1f2937',
            },
        },
    },
    plugins: [],
};
