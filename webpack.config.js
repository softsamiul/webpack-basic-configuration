const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports ={
    entry: './src/scripts/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.js$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.html$/,
                use: {
                    loader: "html-loader",
                }
            }

        ]
    },
    plugins: [new HtmlWebpackPlugin()],
}