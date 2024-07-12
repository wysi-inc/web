/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './src/**/*.tsx',
        './public/**/*.js'
    ],
    safelist: [
        'text-base-content',
    ],
    theme: {
        extend: {
            width: {
                'mil': '1000px',
            },
            screens: {
                'mil': '1000px',
            },
            dropShadow: {
                'solid': [
                    '0 1px 1px rgba(0, 0, 0, .5)',
                    '0 1px 1px rgba(0, 0, 0, .5)'
                ]
            },
        },
    },
    plugins: [require("daisyui")],
    daisyui: {
        themes: [{
            dracula: {
                ...require("daisyui/src/theming/themes")["dracula"],
                "accent": "#ffb86c",
            }
        }, {
            pastel: {
                ...require("daisyui/src/theming/themes")["pastel"],
                // "--rounded-box": "0.5rem", // border radius rounded-box utility class, used in card and other large boxes
                "--rounded-btn": "0.5rem",
                "accent": "#ffb86c",
                "neutral": "#f0f0f0",
                "primary": "#ff79c6",
                "secondary": "#bd93f9",
            }
        }]
    }
}
