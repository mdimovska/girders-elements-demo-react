const webpack = require('webpack')
const webpackMerge = require('webpack-merge')
const commonConfig = require('./common')

const filename = '[name].bundle.js'

module.exports = function (env) {
  return webpackMerge.smart(commonConfig(env), {
    devtool: 'inline-source-map',
    output: {
      filename
    },
    plugins: [
      new webpack.DefinePlugin({
        'process.env': {
          NODE_ENV: JSON.stringify('development')
        }
      }),
      new webpack.HotModuleReplacementPlugin()
    ]
  })
}
