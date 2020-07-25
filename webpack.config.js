const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

const path = require('path');
module.exports = {
    mode: 'production',
    entry: {
        main: './src/index.js',
    },
    output: {
        path: path.resolve('dist'),
        filename: 'js/[name].js',
        libraryTarget: "umd",
        library: 'FunkyBar'
    },
    resolve: {
        extensions: [ '.tsx', '.ts', '.js' ],
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    { loader: MiniCssExtractPlugin.loader },
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true,
                            sourceMap: true,
                        }
                    },
                ],
                exclude: /node_modules/,
            },
            {
                test: /\.css$/,
                use: [
                    { loader: MiniCssExtractPlugin.loader },
                    { loader: 'css-loader' },
                ],
                include: /node_modules/,
            },
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: { loader: 'babel-loader' },
            },
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    },
    optimization: {
        minimizer: [
            new TerserPlugin({
                cache: true,
                parallel: true /*启用cpu加速打包速度*/,
                sourceMap: true, // set to true if you want JS source maps/*帮助快速查找问题所在的地方*/
                exclude: /node_modules/,
            }),
            new OptimizeCSSAssetsPlugin(
                {}
            )
        ],
        splitChunks: {
            // chunks: 'all',
            cacheGroups: {
                vendors: {
                    test: /[\\/]node_modules[\\/]/,
                    chunks: 'async',
                }
            }
        }
        // namedChunks: true,
        // runtimeChunk: true,
        // splitChunks: {
        //     chunks: 'all',
        //     // maxInitialRequests: Infinity,
        //     // minSize: 10,
        //     // cacheGroups: {
        //     //     vendor: {
        //     //         test: /[\\/]node_modules[\\/]/,
        //     //         name(module) {
        //     //             // get the name. E.g. node_modules/packageName/not/this/part.js
        //     //             // or node_modules/packageName
        //     //             const packageName = module.context.match(
        //     //                 /[\\/]node_modules[\\/](.*?)([\\/]|$)/
        //     //             )[1];
        //     //
        //     //             // npm package names are URL-safe, but some servers don't like @ symbols
        //     //             return `npm.${packageName.replace('@', '')}`;
        //     //         },
        //     //     },
        //     // },
        // },
    },

    plugins: [
        new MiniCssExtractPlugin({
            filename: 'css/[name].css', // filename代表的是没有异步加载的css和从node_modules里面分离出来的css那部分css, 简单来说就是初始打包成的那块css
            chunkFilename: 'css/chunk.[id].css', // chunkFilename代表的是从node_modules里面分离出来的css. 还有react-loadable异步加载的css
            // allChunks: true,
        }),
        new CleanWebpackPlugin(),
        // new webpack.HashedModuleIdsPlugin(),
    ],
    externals: {
        react: "react",
        lodash: 'lodash',
    }
};
