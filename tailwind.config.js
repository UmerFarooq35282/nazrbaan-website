module.exports = {
    content: ["./**/*.html", "./**/*.jsx", "./**/*.tsx"],
    theme: {
        extend: {
            fontFamily: {
                mainFont: ['"JameelNooriNastaleeqRegular"', 'ui-serif', 'serif'],
            },
            transitionProperty: {
                'height': 'height',
            },
        },
    },
    plugins: [require('@tailwindcss/typography')],
};