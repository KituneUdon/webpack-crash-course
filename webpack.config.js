const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

const outputPath = path.resolve(__dirname, 'dist');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: outputPath,
  },
  module: {
    rules: [
      {
        // enforce: "pre"を設定したのでこれが最初に実行される
        enforce: 'pre',
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.(sc|c)ss$/,
        // 配列の末尾から順番にloaderが動く
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(jpe?g|png|gif|svg|ico)$/i,
        loader: 'url-loader',
        options: {
          // 2kを超える画像を独立したファイルとして分離するよう設定
          // ブラウザで読み取る際に画像を並列に読み取ることができるようになるので、パフォーマンス面でも良い
          limit: 2048,
          name: './images/[name].[ext]',
        },
      },
      {
        test: /\.html$/,
        loader: 'html-loader',
      },
    ],
  },
  devServer: {
    contentBase: outputPath,
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: './src/index.html',
      filename: './index.html',
    }),
    // CSSを分割してHTMLから直接読み込むプラグイン
    new MiniCssExtractPlugin({
      // name : defaultでmainが入る
      // hash : ユニークなハッシュ値 キャッシュサーバにキャッシュされないためにユニークなハッシュ値をつける
      filename: '[name].[hash].css',
    }),
  ],
  // optimization = 最適化
  // 最適化の対象はminimizerに配列で渡す
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        test: /\.js(\?.*)?$/i,
        uglifyOptions: {
          compress: {
            drop_console: true,
          },
        },
      }),
      new OptimizeCSSAssetsPlugin({}),
    ],
  },
  devtool: 'eval-source-map',
};
