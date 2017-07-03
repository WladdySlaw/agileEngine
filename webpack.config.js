var webpack = require('webpack');

var PROD = false;

module.exports = {
    entry: "./src/js/index.js",
    output: {
        path: "./src/js/",
        filename: PROD ? 'bundle.min.js' : 'bundle.js'
    },
    module: {
        loaders: [
            { test: /\.html$/, loader: "html" },
        ]
    },
    plugins: PROD ? [
            new webpack.optimize.UglifyJsPlugin({
                compress: { warnings: false }
            })
        ] : []
};