/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{html,js,jsx,ts,tsx}"
  ],
    future: {
        hoverOnlyWhenSupported: false,
    },
    theme: {
        extend: {},
    },
    plugins: [
        require('@aegov/design-system'),
        require('@tailwindcss/typography'),
        require('@tailwindcss/forms')
    ],
}

