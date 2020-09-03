const path = require('path'),
    HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    mode: 'development',
    entry: {
        main: './src/index.js'
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
          ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            inject: true,
            title: 'Array Applicant Pre-work',
            template: './src/index.html' 
        })
    ],
    devServer: {
        contentBase: './dist',
        compress: true,
        port: 9000,
        watchContentBase: true
    }
}