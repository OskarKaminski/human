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
            {pattern: 'app/*.js', load: false},
            {pattern: 'app/*.spec.js', ignore: true}
        ],

        tests: [
            {pattern: 'app/*.spec.js', load: false}
        ],

        postprocessor: wallabyPostprocessor,
        
        setup: function () {
            window.__moduleBundler.loadTests();
        }
    };
};
