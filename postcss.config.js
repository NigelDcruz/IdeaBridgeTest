module.exports = {
    // parser: 'sugarss',
    plugins: {
        //   'postcss-import': {},
        'postcss-preset-env': {
            /* use stage 3 features + css nesting rules */
            stage: 3,
        },
        //   'cssnano': {}
    }
}