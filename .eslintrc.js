module.exports = {
    root: true,
    env: {
        browser: true,
        node: true,
    },
    extends: [
        'plugin:vue/essential', 'eslint:recomended'
    ],
    rules:{
        'vue/multi-word-component-names': 'off',
        'no-debbuger': 'off',
    },
}