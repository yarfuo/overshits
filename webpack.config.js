const path = require("path");
const CopyWebpackPlugin = require("copy-webpack-plugin")
const {CleanWebpackPlugin} = require("clean-webpack-plugin")

const DIST_PATH = path.join(__dirname, "dist");

module.exports = {
  mode: "production",
  resolve: {
    extensions: ["*", ".ts", ".js"]
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: "ts-loader",
        exclude: /node_modules/
      }
    ]
  },
  entry: {
    "block": "./src/block.ts",
  },
  output: {
    path: DIST_PATH,
    filename: "[name].js"
  },
  devtool: "source-map",
  stats: {
    hash: true,
    timings: true,
  },
  watchOptions: {
    ignored: /node_modules|dist/
  },
  node: false,
  performance: {
    hints: false
  },
  plugins: [
    new CleanWebpackPlugin({
      cleanAfterEveryBuildPatterns: DIST_PATH
    }),
    new CopyWebpackPlugin({
      patterns: [
        path.join(__dirname, 'src/manifest.json')
      ]
    })
  ]
};
