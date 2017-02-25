var wallabyWebpack = require('wallaby-webpack');

var wallabyPostprocessor = wallabyWebpack({});

module.exports = function (wallaby) {
    return {
        files: [
            {pattern: 'public/src/**/*.js', load: false},
            {pattern: 'public/src/**/*.spec.js', ignore: true}
        ],

        tests: [
            {pattern: 'public/src/**/*.spec.js', load: false}
        ],

        postprocessor: wallabyPostprocessor,
        compilers: {
            '**/*.js': wallaby.compilers.babel({
                babel: require('babel-core'),
                presets: ['es2015', 'stage-2']
            })
        },

        setup: function () {
            window.__moduleBundler.loadTests();
        }
    };
};
