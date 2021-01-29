const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    entry:path.join(__dirname,'src/index.js'),
    output:{
        // 编译文件保存路径
        path:path.join(__dirname,'./dist'),
        filename:'js/[name]-[hash:5].js'
    },
    devServer:{
        // 服务器根目录
        contentBase:path.join(__dirname,'./public'),
        // port:
        // proxy:
        // compress:true,
    },
    resolve:{
        // 路径别名
        alias:{
            '@':path.resolve('./src'),
            '$c':path.resolve('./src/components'),
            '$v':path.resolve('./src/views'),
        },
        // 默认扩展名
        extensions:['.js', '.json','.jsx']
    },
    module:{
        rules:[
            // js: babel-loader
            {
                test:/\.jsx?$/,
                // includes/excludes：加快编译速度
                include:path.join(__dirname,'./src'),
                // excludes:path.join(__dirname,'./node_modules'),
                use:{
                    loader:'babel-loader',
                    options:{
                        presets:['@babel/preset-react'],
                        plugins:[
                            ['@babel/plugin-proposal-decorators',{legacy:true}],
                            ['@babel/plugin-proposal-class-properties',{loose:true}],
                        ]
                    }
                }
            },
            // css: css-loader,style-loader
            {
                test:/\.css$/,
                //include:path.join(__dirname,'./src'),
                use:['style-loader','css-loader']
            },

            // sass: sass-loader
            // css: css-loader,style-loader
            {
                test:/\.s[ca]ss$/,
                include:path.join(__dirname,'./src'),
                use:['style-loader','css-loader','sass-loader']
            }
        ]
    },

    // 插件
    plugins:[
        new HtmlWebpackPlugin({
            template:'./public/template.html',
            // filename:'login.html', // 默认index.html
        })
    ]
}