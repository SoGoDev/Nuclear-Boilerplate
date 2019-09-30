const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require("html-webpack-plugin");


module.exports = {
  stats: "errors-warnings",
  entry: ["./src/index.tsx","./src/Styles/index.scss" ],
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json', '.css', '.scss']
  },
  output: {
    path: path.join(__dirname, "/bundle"),
    filename: "bundle.min.js"
  },
  module: {
    rules: [
      {
        test: /\.ts?$/,
        loader: 'string-replace-loader',
        options: {
          search: '@Pages',
          replace: '',
        }
      },
      {
        test: /\.tsx?$/,
        loader: 'awesome-typescript-loader'
      },
      {
        test:/\.(sa|sc|c)ss$/,
        use: [
          process.env.NODE_ENV !== 'production' ? 'style-loader' : MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ['file-loader']
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./static/index.html"
    }),
    new MiniCssExtractPlugin({
      filename: 'bundle.min.css',
    })
  ]
};
