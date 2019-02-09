const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin  = require('mini-css-extract-plugin');

module.exports = {
    entry: [
        'webpack-dev-server/client/?http://localhost:8080',
        'webpack/hot/dev-server',
        './index.js'
    ],
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            },
            {
                test: /\.(sa|sc|c)ss$/,
                use: [
                    'css-hot-loader',
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader',
                ],
            },
            {
                test: /\.(png|woff|woff2|eot|ttf|svg|jpg)$/,
                loader: 'url-loader?limit=100000'
            }
        ]
    },
    resolve: {
        extensions: ['*', '.js', '.jsx'],
        alias: {
            components: path.resolve(__dirname, 'components'),
            reduxDir: path.resolve(__dirname, 'redux'),
            actions: path.resolve(__dirname, 'actions'),
            service: path.resolve(__dirname, 'service'),
            utils: path.resolve(__dirname, 'utils'),
            static: path.resolve(__dirname, 'static'),
            views: path.resolve(__dirname, 'views'),
        }
    },
    output: {
        path: __dirname + '/dist',
        publicPath: '/',
        filename: 'bundle.js'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new MiniCssExtractPlugin({
            filename: 'main.css',
            chunkFilename: '[id].css'
        }),
    ],
    devServer: {
        contentBase: './',
        hot: true,
        historyApiFallback: true,
        host: '0.0.0.0'
    }
};
