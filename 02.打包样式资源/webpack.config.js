/**
 * webpack.config.js webpack的配置文件
 *  作用:指示webpack干哪些活(当你运行 webpack 指令时,会加载里面的指令)
 *
 * 所有构想工具都是基于nodejs平台运行的~模块化默认采用commonjs
 */
// resolve用来拼接绝对路径的方法
const {resolve} = require('path')

module.exports = {
    // webpack配置
    // 入口起点
    entry: './src/index.js',

    // 输出
    output: {
        // 输出文件名
        filename: 'built.js',
        // 输出路径
        // __dirname nodejs的变量,代表当前文件的目录路径
        path: resolve(__dirname, 'build')
    },

    // loader的配置
    module: {
        // 详细loader配置
        rules: [
            /*处理css*/
            {
                // 匹配哪些文件
                test: /\.css$/,
                // 使用哪些loader浸信处理
                use:[
                    // use数组中loader执行顺序:从右到左,从下到上依次执行
                    // 创建style标签,将js中的样式资源插入进行,添加到head中生效
                    'style-loader',
                    // 将css文件以字符串的形式变成commonjs模块加载js中,里面内容是样式字符串
                    'css-loader'
                ]
            },
            /*处理less*/
            {
                test:/\.less$/,
                use: [
                    'style-loader',
                    'css-loader',
                    // less-loader和less
                    'less-loader'
                ]
            }
        ]
    },
    // plugins的配置
    plugins: [
        // 详细plugins的配置

    ],

    // 模式
    mode: 'development',
    // mode: 'production'

}