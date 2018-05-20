const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
    template: './views/index.html',
    filename: 'index.html',
    inject: 'body'
});

module.exports = {
    mode: 'development',
    entry: './src/mercyFailure.js',
    output: {
        path: __dirname,
        publicPath: '/',
        filename: 'bundle.js'
    },
    plugins: [
        HtmlWebpackPluginConfig
    ]
};