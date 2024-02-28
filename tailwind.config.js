/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                mainColor: "#2B8AC1",
                btnColor: "#3AC11B",
            },
            backgroundImage: {
                loginImage: "url(./public/person.svg)",
            },
        },
    },
    plugins: [],
};
