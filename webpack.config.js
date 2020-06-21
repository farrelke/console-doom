const path = require("path");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  node: {
    fs: "empty"
  },
  mode: "development",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist")
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        {
          from: "./index.html"
        },
        {
          from: "src/doom.wasm"
        },
        {
          from: "data/**/*.wad"
        },
        {
          from: "music/**/*.ogg"
        }
      ]
    })
  ],
  devtool: "eval-cheap-source-map"
};
