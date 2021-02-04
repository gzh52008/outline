// const { injectBabelPlugin } = require('react-app-rewired');

// module.exports = function override(config, env) {
//     // 修改配置
//     config.resolve.alias['@'] = path.join(__dirname,'./src/')

//     config = injectBabelPlugin([
//         "@babel/plugin-proposal-decorators", { "legacy": true }
//     ], config);
//     config = injectBabelPlugin(['@babel/plugin-proposal-class-properties',{loose:true}], config);

//     return config;
// }

const {
    override,
    addDecoratorsLegacy,
    disableEsLint,
    useBabelRc,
    fixBabelImports
} = require('customize-cra');

module.exports = override(
    addDecoratorsLegacy(), // 装饰器支持
    fixBabelImports('import',{ libraryName: "antd", style: "css" }),
    useBabelRc()
)