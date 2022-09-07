const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');


const proxyTarget = "http://citkb.vargroup.gr/"
//const proxyTarget = 'http://127.0.0.1:5000',

module.exports = {
  entry: './src/index.js',

  devServer: {
    historyApiFallback: true,
    compress: true,
    hot: true,
    open: true,
    host: "127.0.0.1",
    port: 3007,
    proxy: {
      "/api": {
        "changeOrigin": true,
        "cookieDomainRewrite": "localhost",
        "target": proxyTarget,
        onProxyReq: proxyReq => {
          if (proxyReq.getHeader('origin')) {
            proxyReq.setHeader('origin', proxyTarget);
          }
        }
      }
    }


  },


  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'bundle.js'
  },

  plugins: [
    new HTMLWebpackPlugin({
      template: './src/index.html'
    })
  ],




  module: {

    rules: [
      {
        test: /\.json$/,
        loader: 'json-loader'
      },
      {
        test: /\.(css|scss)$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        loader: "file-loader",
        options: {
          outputPath: "../fonts",
        }
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader: 'svg-url-loader',
            options: {
              limit: 10000,
            },
          },
        ],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      }
    ]
  }



}