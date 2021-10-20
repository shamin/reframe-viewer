const HtmlWebPackPlugin = require("html-webpack-plugin");
const path = require("path")

module.exports = {
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "src/panel.html",
      filename: "index.html"
    })
  ],
  output: {
    path: __dirname + '/dist/panel',
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist/panel'),
    },
    port: 9000,
  },
};