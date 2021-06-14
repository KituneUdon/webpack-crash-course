const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");

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
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: "babel-loader",
      },
      {
        test: /\.css$/,
        // 後ろから順番にloaderが動く
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.(jpe?g|png|gif|svg|ico)$/i,
        loader: "url-loader",
        options: {
          // 2kを超える画像を独立したファイルとして分離するよう設定
          // ブラウザで読み取る際に画像を並列に読み取ることができるようになるので、パフォーマンス面でも良い
          limit: 2048,
          name: "./images/[name].[ext]",
        },
      },
      {
        test: /\.html$/,
        loader: "html-loader",
      },
    ],
  },
  devServer: {
    contentBase: outputPath,
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/index.html",
      filename: "./index.html",
    }),
  ],
};
