const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const CopyPlugin = require("copy-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");


const cssLoaders = () => {
    return [
        MiniCssExtractPlugin.loader,
        'css-loader',
        'sass-loader'
    ]
}

const cssModuleLoaders = () => {
    return  [
        MiniCssExtractPlugin.loader,
        {
            loader: "css-loader",
            options: {
                importLoaders:2,
                esModule:true,
                modules: {
                    localIdentName:'[name]__[local]--[hash:base64:5]',
                }
            },
        },
        'sass-loader'
    ]

}

module.exports = {

    entry: path.resolve(__dirname, '..', 'src'),

    output: {
        filename: "[name].[hash].js",
        path: path.resolve(__dirname, '..', 'bundle')
    },

    resolve: {
        extensions: ['.js','.tsx','.jsx','.ts','.scss']
    },

    plugins: [
        new HTMLWebpackPlugin({
            template: path.resolve(__dirname, '..', 'public/index.html')
        }),
        new CleanWebpackPlugin(),
        new CopyPlugin({
            patterns: [
                {
                    from: path.resolve(__dirname, '..', 'src/assets'),
                    to: path.resolve(__dirname, '..', 'bundle'),
                    noErrorOnMissing: true
                },
            ],
        }),
        new MiniCssExtractPlugin({
            filename: '[name].[hash].css'
        }),
        new CssMinimizerPlugin()

    ],

    devServer: {
        historyApiFallback: true,
        hot:true
    },

    module: {
        rules: [
            {
                test: /\.(ts|js)x?$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            },
            {
                test: /\.s?css$/,
                include: /\.module\.s?css$/,
                use: cssModuleLoaders()
            },
            {
                test: /\.s?css$/,
                exclude: /\.module\.s?css$/,
                use: cssLoaders()
            },
            {
                test: /\.(png|jpg|webp)$/,
                type: "asset/resource"
            },
            {
                test: /\.svg$/,
                type: "asset/inline"
            }
        ]
    }
}