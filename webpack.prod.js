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
      template: './public/taskpane.html'
    }),
    new CopyPlugin({
      patterns: [
        {
          from: "public",
          to: "",
          globOptions:{
            ignore: ["**/taskpane.*"]
          }
        }
      ]
    }),
    new ModuleFederationPlugin({
      name: 'TDE',
      filename: 'TDE.js',
      remotes: {
        '@TimeDev/Pomodoro': 'TDW_Pomodoro@/tdw-pomodoro/TDW_Pomodoro.js',
        '@TimeDev/ShortcutShark': 'TDW_Shortcut_Shark@/tdw-shortcut-shark/TDW_Shortcut_Shark.js',
        '@TimeDev/Todo': 'TDW_Todo@/tdw-todo/TDW_Todo.js',
        '@TimeDev/TypingTiger': 'TDW_Typing_Tiger@/tdw-typing-tiger/TDW_Typing_Tiger.js',
      },
      exposes: {},
      shared: {
        react: {
          singleton: true,
          requiredVersion: deps['react']
        },
        'react-dom': {
          singleton: true,
          requiredVersion: deps['react-dom']
        }
      }
    }),
    new DotenvWebpackPlugin()
  ]
};
