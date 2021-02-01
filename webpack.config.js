module.exports = {
  mode: 'development',
  devtool: 'inline-source-map',
  entry: './app.js',
  output: {
    filename: 'app.js',
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [
          'style-loader',
          'css-loader'
        ],
      }
    ]
  },
  devServer: {
    hot: true,
  },
};
