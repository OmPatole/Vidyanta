/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Space Grotesk', 'system-ui', 'sans-serif'],
                mono: ['Space Mono', 'monospace'],
            },
            colors: {
                primary: '#5B4FE9',
                'primary-light': '#7B72F2',
                accent: '#FF3D57',
                'accent-green': '#00C896',
                'accent-yellow': '#FFD23F',
                surface: '#EDE8DF',
                'surface-2': '#E4DDD3',
                bg: '#F5F0E8',
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
