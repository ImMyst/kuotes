/** @type {import('tailwindcss').Config} */

module.exports = {
    content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                primary: '#2D29DC',
                'primary-hover': '#514DFB',
                'primary-focus': '#0D0ABF',
                background: '#1A202C',
                'background-secondary': '#242C3C',
                // Links
                magic: '#6851FF',
                'magic-hover': '#7561F9',
                'magic-focus': '#573EFF'
            }
        }
    },
    plugins: []
};
