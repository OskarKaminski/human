var webpack = require('webpack');
var path = require('path');

module.exports = {
    entry: './public/src/index.module.js',
    output: {
        filename: 'bundle.js',
        path: './public/dist'
    },
    resolve: {
        modulesDirectories: [
            'node_modules',
            'src/services',
        ],
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel"
            },
            {
                test: /\.css$/,
                loader: "style-loader!css-loader"
            },
            {
                test: /\.scss$/,
                loaders: ["style", "css", "sass"]
            },
            {
                test: /\.less$/,
                loaders: ["style", "css", "less"]
            },
            {
                test: /\.html/,
                loader: "html"
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                loader: 'url?limit=10000!img?progressive=true'
            },
            {
                test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'url?limit=10000&mimetype=application/font-woff'
            },
            {
                test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'url?limit=10000&mimetype=application/octet-stream'
            },
            {
                test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'file'
            },
            {
                test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'url?limit=10000&mimetype=image/svg+xml'
            }
        ]
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery"
        })
    ]
};