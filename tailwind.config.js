/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Inter', 'system-ui', 'sans-serif'],
            },
            colors: {
                primary: '#2563EB',
                'primary-light': '#3B82F6',
                accent: '#00E5FF',
                surface: '#171717',
                'surface-2': '#1F1F1F',
            },
            animation: {
                'marquee': 'marquee 30s linear infinite',
                'counter': 'fadeUp 0.6s ease forwards',
            },
            keyframes: {
                marquee: {
                    '0%': { transform: 'translateX(0%)' },
                    '100%': { transform: 'translateX(-50%)' },
                },
                fadeUp: {
                    from: { opacity: 0, transform: 'translateY(20px)' },
                    to: { opacity: 1, transform: 'translateY(0)' },
                },
            },
        },
    },
    plugins: [],
}
