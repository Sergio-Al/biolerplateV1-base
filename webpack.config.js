const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
// entry  --> output

module.exports = (env, argv) => {
  const isProduction = argv.mode === "production";

  console.log("env", env);
  return {
    mode: "development",
    // where it should start
    entry: "./src/app.js", // This line has been modified in the redux section of the react course
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
          use: [
            MiniCssExtractPlugin.loader,
            { loader: "css-loader", options: { sourceMap: true } },
            { loader: "sass-loader", options: { sourceMap: true } },
          ],
        },
      ],
    },
    plugins: [
      new MiniCssExtractPlugin({
        filename: "styles.css",
      }),
    ],
    devtool: isProduction ? "source-map" : "inline-cheap-module-source-map",
    devServer: {
      contentBase: path.join(__dirname, "public"),
      historyApiFallback: true,
    },
  };
};
