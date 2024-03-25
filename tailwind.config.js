/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './src/components/**/*.tsx'
    ],
    theme: {
        extend: {},
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
                "neutral": "#f0f0f0",
            }
        }]
    }
}
