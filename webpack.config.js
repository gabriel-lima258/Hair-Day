const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  // configuração de pasta build 
  target: 'web',
  mode: 'development',

  entry: path.resolve(__dirname, 'src', 'main.js'),
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },

  // configuração de server
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    port: 3000,
    open: true,
    liveReload: true,
  },

  // configuração do html no webpack
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'index.html'),
      favicon: path.resolve('src', 'assets', 'scissors.svg'),
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, 'src', 'assets'),
          to: path.resolve(__dirname, 'dist', 'src', 'assets')
        }
      ]
    }),
  ],

  // configuração do css
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      // configurando o babel
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          }
        }
      },
    ],
  },
}