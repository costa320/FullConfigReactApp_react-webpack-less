const path = require('path');
const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const _HtmlWebPackPlugin = new HtmlWebPackPlugin({template: "./public/index.html", filename: "index.html"});
const _MiniCssExtractPlugin = new MiniCssExtractPlugin({filename: "css/[name].css", chunkFilename: "[id].css"})

const WebpackConfig = {

    output: {
        path: path.resolve(__dirname, "build"),
        filename: 'js/main.js'
    },
    module: {
        rules: [
            {
                test: /\.html$/,
                use: [
                    {
                        loader: "html-loader"
                    }
                ]
            }, {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            }, {
                test: /\.css$/,
                use: [
                    {
                        loader: "style-loader"
                    }, {
                        loader: "css-loader",
                        options: {
                            modules: true,
                            importLoaders: 1,
                            localIdentName: "[name]_[local]_[hash:base64]",
                            sourceMap: true
                        }
                    }
                ]
            }, {
                test: /\.less$/,
                use: [
                    {
                        loader: "style-loader"
                    }, {
                        loader: "css-loader",
                        options: {
                            sourceMap: true,
                            modules: true,
                            localIdentName: "[local]___[hash:base64:5]"
                        }
                    }, {
                        loader: "less-loader"
                    }
                ]
            }
        ]

    },
    optimization: {
        splitChunks: {
            chunks: 'all'
        }
    },
    plugins: [_HtmlWebPackPlugin]
};

module.exports = WebpackConfig;