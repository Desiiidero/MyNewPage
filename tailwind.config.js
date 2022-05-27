module.exports = {
    content: ["*.{html,js}"],
    theme: {
        fontFamily: {
            'notosans': ['Source Sans Pro', 'Noto Sans TC', 'sans-serif'],
            'serif': ['serif'],
        },

        extend: {
            colors: {
                'main-st': '#fffffb', //胡粉
                'main-nd': '#d7b98e', //砥粉
                'main-rd': '#9b6e23', //狐
                'sub-st': '#62592c', //海松茶
                'sakura': '#fedfe1', //櫻
                'torinoko': '#dac9a6', //鳥之子
                'usuki': '#fad689', //淺黃

            }
        },
    },
    plugins: [
        require('tailwindcss-textshadow')
    ],
}