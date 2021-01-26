const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    // mode: process.env.NODE_ENV,
    // webpack配置
    // 入口:告诉webpack从哪里开始打包
    entry:path.join(__dirname,'src/main.js'),

    // 出口：打包后的文件存放目录
    output:{
        path:path.join(__dirname,'dist'),
        filename:"js/[name]-[hash:5]-bundle.js"//打包后输出的文件名
    },

    devServer:{
        // 服务器根目录
        contentBase:path.join(__dirname,'./public'),
        // port:3000, // 默认8080
    },

    // 加载器loader：用于编译代码（每一种文件类型都需要相应loader）
    module:{
        rules:[
            // babel-loader：处理js代码
            {
                test:/\.js$/i,
                // loader:'babel-loader', // 为use.loader的简写
                // use:['babel-loader']
                use:[{
                    loader:'babel-loader',
                    options:{
                        // plugins:[],  // babel插件
                        presets:['@babel/preset-react'],     // babel插件集

                    }
                }]
            },

            // css加载器：css-loader,style-loader
            {
                test:/\.css$/,
                use:['style-loader','css-loader']
            },

            // sass加载器：sass-loader, node-sass
            {
                test:/\.scss$/,
                use:['style-loader','css-loader','sass-loader']
            }
        ]
    },

    // 插件
    plugins:[
        // 用来创建html页面
        new HtmlWebpackPlugin({
            template:'./public/template.html',
            // filename:'login.html', // 默认index.html
        })
    ]
}