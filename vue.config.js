const path = require('path');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const CompressionPlugin = require('compression-webpack-plugin')

module.exports = {
    /** publicPath  type:{string} default:'/' */
    publicPath: process.env.NODE_ENV === 'production' ? '/my-app/' : '/',
    outputDir: 'dist',
    assetsDir: 'static',
    lintOnSave: true,

    // webpack配置
    chainWebpack: config => {
        /** cli2 添加分析工具 */
        if (process.env.NODE_ENV === 'production') {
            config
            .plugin('webpack-bundle-analyzer')
            .use(BundleAnalyzerPlugin)
            .end();
        };
        /** cli3 移除prefetch 预加载插件 */
        config.plugins.delete('prefetch')
        /** cli3 或者修改预加载选项 */
        // config.plugin('prefetch').tap(options => {
        //     options[0].fileBlacklist = options[0].fileBlacklist || [];
        //     options[0].fileBlacklist.push(/myasyncRoute(.)+?\.js$/);
        //     return options
        // })
    },
    configureWebpack: config => {
        if (process.env.NODE_ENV === 'production') {
            // 为生产环境修改配置
            config.mode = 'production'
            return {
                plugins: [
                    new CompressionPlugin({
                        text: /\.js$|\.html$|\.css/, // 匹配文件名
                        threshold: 10240, // 对>10k的数据进行压缩
                        deleteOriginalAssets: false, //是否删除原文件
                        minRatio: 0.8 //只有压缩率比这个值小的资源才会被处理
                    }),
                ]
            }
            // 将每个依赖包打包成单独的js文件
            let optimization = {
                runtimeChunk: 'single',
                splitChunks: {
                    chunks: 'async', // all
                    maxInitialRequests: Infinity,
                    minSize: 20000, // 依赖包超过20000bit将被单独打包
                    minChunks: 2,
                    maxAsyncRequests: 3,
                    maxInitialRequests: 3,
                    name: true,
                    cacheGroups: {
                        vendor: {
                            test: /[\\/]node_modules[\\/]/,
                            name (module) {
                                // get the name. E.g. node_modules/packageName/not/this/part.js
                                // or node_modules/packageName
                                const packageName = module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/)[1]
                                // npm package names are URL-safe, but some servers don't like @ symbols
                                return `npm.${packageName.replace('@', '')}`
                            }
                        }
                    }
                }
            }
            Object.assign(config, {
                optimization
            })
            // config.optimization.SplitChunksPlugin({
            //     chunks: "async",
            //     minSize: 20000,
            //     minChunks: 2,
            //     maxAsyncRequests: 3,
            //     maxInitialRequests: 3,
            //     name: true
            // })
        }else{
            config.mode = 'development'
        }
    },
    css: {
        extract: true, // 是否使用css分离插件 ExtractTextPlugin
        sourceMap: false,
        loaderOptions: {}, // css预设器配置项
        modules: false //启用 CSS modules for all css / pre-processor files
    },
    // productionSourceMap：{ type:Bollean,default:true } 生产源映射
    //如果您不需要生产时的源映射，那么将此设置为false可以加速生产构建
    productionSourceMap: true,

    // devServer:{type:Object} 3个属性host,port,https
    // 它支持webPack-dev-server的所有选项
    devServer: {
        port: 8085,
        host: 'localhost',
        https: false,
        open: true,
        // proxy: 'http://localhost:4000' // 配置跨域处理,只有一个代理
        proxy: {
            '/api': {
                target: '<url>',
                ws: true,
                changeOrigin: true
            },
            '/foo': {
                target: '<other_url>'
            }
        },  // 配置多个代理
    }
}