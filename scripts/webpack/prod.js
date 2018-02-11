const webpack = require('webpack')
const webpackMerge = require('webpack-merge')
const commonConfig = require('./common')

const filename = '[name].[chunkhash].bundle.js'

module.exports = function (env) {
  return webpackMerge(commonConfig(env), {
    devtool: 'hidden-source-map',
    output: {
      filename
    },
    plugins: [
      new webpack.DefinePlugin({
        'process.env': {
          NODE_ENV: JSON.stringify('production')
        }
      }),
      new webpack.LoaderOptionsPlugin({
        minimize: true,
        debug: false
      }),
      new webpack.optimize.UglifyJsPlugin({
        compress: {
          warnings: false
        },
        sourceMap: true
      })
    ],
    devServer: {
      compress: true
    }
  })
}
