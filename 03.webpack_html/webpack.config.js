/**
 * loader:1.下载 2.使用(配置laoder)
 * plugins:1.下载 2.引入 3.使用
 */
const {resolve} = require('path')

const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: './src/index.js',

    output: {
        filename: 'built.js',
        path: resolve(__dirname, 'build')
    },

    module: {
        rules: [
            {test: /\.css$/, use: ['style-loader', 'css-loader']},
            {test: /\.less/, use: ['style-loader', 'css-loader', 'less-loader']}
        ]
    },

    plugins: [
        // plugins的配置
        // html-webpack-plugin
        // 功能:默认会创建一个空的HTML,自动引入打包输入的所有资源(JS/CSS)
        new HtmlWebpackPlugin({
            // 复制 './src/index.html'文件,并自动引入打包输出所有资源(JS/CSS)
            template:'./src/index.html'
        })
    ],

    mode: 'development'

}