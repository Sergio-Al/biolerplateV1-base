const path = require("path");
// entry  --> output

module.exports = {
  mode: "development",
  // where it should start
  entry: "./src/app.js",
  // where it should end
  output: {
    path: path.join(__dirname, "public"),
    // filename you can put anything name that you like
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        loader: "babel-loader",
        test: /\.js$/,
        exclude: /node_modules/,
      },
      {
        test: /\.s?css$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
  devtool: "eval-cheap-module-source-map",
  devServer: {
    contentBase: path.join(__dirname, "public"),
  },
};
