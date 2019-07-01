const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports={
    devtool: 'cheap-module-source-map',
    entry: "./src/index.js",
    // output: {
    //     path: __dirname + '/dist',
    //     publicPath: __dirname + '/public',
    //     filename: "bundle.js"
    // },
    module: {

        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use:{
                    loader: "babel-loader"
                }
            },
            {
                test:/\.css$/,
                use:['style-loader','css-loader']
            }
        ]
    },
    resolve: {
        extensions: ['*' , '.js', '.jsx']
    },

    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            template: 'index.html'
        })
    ],

    devServer: {
        // contentBase: './dist',
        // inline:true,
        port: 3000,
        hot: true
    },
}