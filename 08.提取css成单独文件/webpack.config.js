/**
 * 开发环境配置:能让代码运行
 *  运行项目指令
 *      webpack:会将打包结果输出出去
 *      yarn webpack serve:只会在内存中编译打包,没有输出
 */

const {resolve} = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
    entry: './src/js/index.js',
    output: {
        filename: "js/built.js",
        path: resolve(__dirname, 'build')
    },
    module: {
        rules: [
            //loader的配置
            {
                //处理less的资源
                test: /\.less$/,
                use: ['style-loader', 'css-loader', 'less-loader']
            },
            {
                //处理css的资源
                test: /\.css$/,
                use: [
                    // 创建style标签,将样式放入
                    // 这个loader取代style-loader.作用:提取js中的css成单独文件
                    MiniCssExtractPlugin.loader,
                    'css-loader'
                ]
            },
            {
                //处理图片的资源
                test: /\.(jpg|png|gif)$/,
                loader: "url-loader",
                options: {
                    limit: 8 * 1024,
                    name: '[hash:10].[ext]',
                    outputPath:'img'
                }
            },
            {
                //处理html中img资源
                test: /\.html$/,
                loader: 'html-loader',
                options: {
                    esModule: false
                }
            },
            {
                //处理其他资源
                exclude: /\.(html|js|css|less|jpg|png|gif)$/,
                loader: "file-loader",
                options: {
                    name: '[hash:10].[ext]]',
                    outputPath:'media'
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({template: "./src/index.html"}),
        new MiniCssExtractPlugin()
    ],
    mode: "development",

    devServer: {
        contentBase: resolve(__dirname, 'build'),
        compress: true,
        port: 3000,
        open: true
    }

}