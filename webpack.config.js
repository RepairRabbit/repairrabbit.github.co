const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const extractCSS = new ExtractTextPlugin('index.min.css');

module.exports = {
  mode: 'production',
  entry: './themes/rr-1/static/bundel.js',
  output: {
    path: path.resolve(__dirname, './themes/rr-1/static/dist'),
    filename: 'index.min.js'
  },
  externals: {
    jquery: '$',
    $: '$'
  },
  module: {
    rules: [{
      test: /(\.css$)/,
      include: [
        path.resolve(__dirname, './themes/rr-1/static/'),
      ],
      use: extractCSS.extract([{
        loader: 'css-loader',
        options: {
          minimize: true
        }
      }])
    }, {
      test: /\.(png|woff|woff2|eot|ttf|svg)$/,
      include: [
        path.resolve(__dirname, './themes/rr-1/static/'),
      ],
      loader: 'url-loader?limit=100000'
    }]
  },
  plugins: [
    extractCSS
  ]
};
