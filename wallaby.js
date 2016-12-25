var wallabyWebpack = require('wallaby-webpack');
var babel = require('babel-core');

var wallabyPostprocessor = wallabyWebpack({
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel',
                exclude: /node_modules/,
                query: {
                    presets: ['es2015', 'stage-2']
                }
            }]
    }
});


module.exports = function (wallaby) {
    return {
        files: [
            {pattern: 'public/*.js', load: false},
            {pattern: 'public/*.spec.js', ignore: true}
        ],

        tests: [
            {pattern: 'public/*.spec.js', load: false}
        ],

        postprocessor: wallabyPostprocessor,
        
        setup: function () {
            window.__moduleBundler.loadTests();
        }
    };
};
