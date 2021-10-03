/* eslint-disable import/no-extraneous-dependencies */
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const fs = require('fs');

const getFileNames = (typesArray) => {
  const getFiles = (type) => fs.readdirSync(`./src/${type}`).map((file) => `./src/${type}/${file}`);
  return typesArray.reduce((acc, type) => [...acc, ...getFiles(type)], ['./src/index.html']);
};

module.exports = {
  entry: getFileNames(['js', 'ts', 'css', 'scss']),
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, '../build'),
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.html$/i,
        loader: 'html-loader',
      },
      {
        test: /\.ts$/i,
        loader: 'ts-loader',
      },
      // {
      //   test: /\.(png|svg|jpg|jpeg|gif)$/i,
      //   loader: 'file-loader',
      //   options: {
      //     name: '[name].[ext]',
      //     publicPath: './src/images',
      //     outputPath: 'images',
      //   },
      // },
      // {
      //   test: /\.(woff|woff2|eot|ttf|otf)$/i,
      //   loader: 'file-loader',
      //   options: {
      //     name: '[name].[ext]',
      //     publicPath: './src/fonts',
      //     outputPath: 'fonts',
      //   },
      // },
    ],
  },
};
