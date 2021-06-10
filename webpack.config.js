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
    ],
  },
  devServer: {
    contentBase: outputPath,
  },
};
