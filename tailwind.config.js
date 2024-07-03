/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './src/components/**/*.tsx'
    ],
    theme: {
        extend: {
            screens: {
                'mil': '1000px',
            },
        },
    },
    plugins: [require("daisyui")],
    daisyui: {
        themes: [{
            dracula: {
                ...require("daisyui/src/theming/themes")["dracula"],
                "--rounded-box": "0.5rem", // border radius rounded-box utility class, used in card and other large boxes
                "--rounded-btn": "0.5rem",
                "accent": "#ffb86c",
            }
        }, {
            pastel: {
                ...require("daisyui/src/theming/themes")["pastel"],
                "--rounded-box": "0.5rem", // border radius rounded-box utility class, used in card and other large boxes
                "--rounded-btn": "0.5rem",
                "accent": "#ffb86c",
                "info": "#88e9fd",
                "neutral": "#f0f0f0",
                "primary": "#ff79c6",
                "secondary": "#bd93f9",
            }
        }]
    }
}
