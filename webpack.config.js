var HtmlWebpackPlugin = require('html-webpack-plugin')
var HtmlWebpackPluginConfig = new HtmlWebpackPlugin({

  template: __dirname + '/app/index.html',
  filename: 'index.html',
  inject: 'body'

})

module.exports = {
  entry:[
    './app/index.js' 
  ],
  output: {
    path: __dirname + '/dist',
    filename: 'index_bundle.js'
  },
  module: {
    loaders: [
      {
         test: /\.jsx?$/,
         include: __dirname + '/app',
         loader: 'babel',
         exclude: /node_modules/
      },
      { test: /\.css$/, loader: 'style-loader!css-loader' },
      { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: "file" },
      { test: /\.(woff|woff2)$/, loader:"url?prefix=font/&limit=5000" },
      { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=application/octet-stream" },
      { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=image/svg+xml" }
    ]
  },
  plugins: [HtmlWebpackPluginConfig]

}
