const path = require("path");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: {
    "background": "./src/background/index.js",
    "panel": "./src/panel/index.js",
    "devtools": "./src/devtools/index.js",
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        { from: "app", to: "" },
      ],
    }),
  ],
  output: {
    path: __dirname + "/dist",
    filename: "[name].js",
    clean: true,
  },
  devServer: {
    static: {
      directory: path.join(__dirname, "dist"),
    },
    port: 9000,
  },
};
