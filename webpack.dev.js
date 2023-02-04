const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const DotenvWebpackPlugin = require('dotenv-webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const deps = require('./package.json').dependencies;

module.exports = {
  mode: 'development',

  entry: {
    index: './index.ts'
  },

  output: {
    publicPath: 'https://localhost:8000/',
    filename: '[contenthash].tde.js',
    chunkFilename: '[contenthash].tde.js'
  },

  devServer: {
    port: 8000,
    https: true,
    historyApiFallback: true
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

  plugins: [
    new MiniCssExtractPlugin({
      filename: '[contenthash].tde.css',
      chunkFilename: '[contenthash].tde.css',
      insert: '#root'
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html'
    }),
    new ModuleFederationPlugin({
      name: 'TDE',
      filename: 'TDE.js',
      remotes: {
        '@TimeDev/Pomodoro':
          'TDW_Pomodoro@https://localhost:8001/TDW_Pomodoro.js',
        '@TimeDev/ShortcutShark':
          'TDW_Shortcut_Shark@https://localhost:8002/TDW_Shortcut_Shark.js',
        '@TimeDev/Todo': 'TDW_Todo@https://localhost:8004/TDW_Todo.js',
        '@TimeDev/TypingTiger':
          'TDW_Typing_Tiger@https://localhost:8003/TDW_Typing_Tiger.js'
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
