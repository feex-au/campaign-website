module.exports = {
    purge: {
        content: ["./layouts/**/*.html", "./content/**/*.md", "./content/**/*.html"],
    },
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                'primary': '#961432',
                'secondary': '#1F7A8C',
                'tertiary': '#F2F5F9',
                'feex-blue': '#242E6C',
                'azzurro': '#7A87D8',
            },
            fontFamily: {
                'montserrat': ['Montserrat'],
            },
        },
        variants: {
            extend: {},
        },
    },
    plugins: [
        require("@tailwindcss/aspect-ratio")
    ],
}
