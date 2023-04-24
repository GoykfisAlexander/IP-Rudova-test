module.exports = {
  mode: "development",
  entry: "./src/index.js",
  watch: true,
  module: {
    rules: [
      {
        test: /\.svg$/,
        use: ["svg-url-loader"],
      },
    ],
  },
};
