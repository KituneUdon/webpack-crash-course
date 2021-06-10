const path = require("path");

const outputPath = path.resolve(__dirname, "dist");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "main.js",
    path: outputPath,
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        // 後ろから順番にloaderが動く
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  devServer: {
    contentBase: outputPath,
  },
};
