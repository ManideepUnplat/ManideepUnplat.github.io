const path = require('path');

const TerserWebpackPlugin = require('terser-webpack-plugin');
const CopyPlugin = require("copy-webpack-plugin");
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const DotenvWebpackPlugin = require('dotenv-webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const deps = require('./package.json').dependencies;

module.exports = {
  mode: 'production',

  entry: {
    index: './index.ts'
  },

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[contenthash].tde.js',
    chunkFilename: '[contenthash].tde.js'
  },

  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx']
  },

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader']
      },
      {
        test: /\.(png|jpe?g|gif|jp2|webp)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]'
        }
      }
    ]
  },

  optimization: {
    minimize: true,
    minimizer: [new TerserWebpackPlugin()],
    chunkIds: 'named',
    splitChunks: {
      chunks: 'async'
    }
  },

  plugins: [
    new MiniCssExtractPlugin({
      filename: '[contenthash].tde.css',
      chunkFilename: '[contenthash].tde.css',
      insert: '#root'
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html'
    }),
    new CopyPlugin({
      patterns: [
        {
          from: "public",
          to: "",
          globOptions:{
            ignore: ["**/index.*"]
          }
        }
      ]
    }),
    new DotenvWebpackPlugin()
  ]
};
