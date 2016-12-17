var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');

module.exports = {
    entry: ['react-hot-loader/patch', 'babel-polyfill', './src/index.js'],
    devtool: 'source-map',
    output: {
        path: './dist',
        filename: 'app-bundle.js',
    },
    module: {
      loaders: [
        {
          test: /\.css$/,
          loader: "style-loader!css-loader",
        },
        {
            test: /\.(eot|svg|ttf|woff|woff2)$/,
            loader: 'file?name=fonts/[name].[ext]'
        },
        {
          test: /\.js$/,
          exclude: /(node_modules|dist|.tmp)/,
          loader: 'babel'
        }
      ]
    },
    plugins: [
        new HtmlWebpackPlugin({
          template: path.join(__dirname, 'src/index.html'),
          hash: true,
        }),
        new webpack.HotModuleReplacementPlugin(),
    ],
    devServer: {
      contentBase: 'dist',
      hot: true,
      inline: true,
      open: true,
      port: 1337
    },
};
