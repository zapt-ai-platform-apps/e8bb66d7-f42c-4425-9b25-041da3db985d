export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'vercel-black': '#000',
                'vercel-white': '#fff',
                'vercel-gray': {
                    50: '#fafafa',
                    100: '#eaeaea',
                    200: '#c8c8c8',
                    300: '#a4a4a4',
                    400: '#8c8c8c',
                    500: '#666666',
                    600: '#444444',
                    700: '#333333',
                    800: '#222222',
                    900: '#111111',
                },
                'vercel-blue': '#0070f3',
                'vercel-cyan': '#79ffe1',
                'vercel-purple': '#f81ce5',
                'vercel-violet': '#7928ca',
                'vercel-success': '#0070f3',
                'vercel-error': '#ff0000',
                'vercel-warning': '#f5a623',
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
            },
            boxShadow: {
                'vercel': '0 4px 14px 0 rgba(0,0,0,0.1)',
            },
        },
    },
    plugins: [],
};