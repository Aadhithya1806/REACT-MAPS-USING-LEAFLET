/** @type {import('tailwindcss').Config,} */
const defaultTheme = require("tailwindcss/defaultTheme");
export default {
    content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        screens: {
            xs: "280px",
            ...defaultTheme.screens,
        },
        extend: {},
    },
    plugins: [],
};
