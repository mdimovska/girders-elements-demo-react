const webpack = require('webpack')
const path = require('path')

const CleanWebpackPlugin = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const defaultFilename = '[name].bundle.js'
const defaultHost = 'localhost'
const defaultPort = 3001

const distFolderName = 'dist'
const projectBasePath = path.resolve(__dirname, '../../')
const sourcePath = path.resolve(projectBasePath, 'web')
const distPath = path.resolve(projectBasePath, distFolderName)

const plugins = [
  new CleanWebpackPlugin([ distFolderName ], {
    root: projectBasePath
  }),
  new webpack.optimize.CommonsChunkPlugin({
    name: 'vendor'
  }),
  new webpack.optimize.CommonsChunkPlugin({
    name: 'manifest'
  }),
  new webpack.HashedModuleIdsPlugin(),
  new HtmlWebpackPlugin({
    filename: 'index.html',
    template: path.resolve(projectBasePath, 'index.html'),
    minify: {
      collapseWhitespace: true,
      removeComments: true,
      removeRedundantAttributes: true,
      removeScriptTypeAttributes: true,
      removeStyleLinkTypeAttributes: true
    }
  })
]

const configWebpack = function (env) {
  const host = env.host || defaultHost
  const port = env.port || defaultPort

  return {
    devtool: 'cheap-module-eval-source-map',
    entry: {
      app: [
        path.resolve(projectBasePath, 'index.js')
      ],
      vendor: [
        'react',
        'react-dom'
      ]
    },
    output: {
      path: distPath,
      filename: defaultFilename
    },
    target: 'web',
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /(node_modules)/,
          use: {
            loader: 'babel-loader',
            options: {
              plugins: [
                '@babel/plugin-proposal-object-rest-spread',
                '@babel/plugin-proposal-class-properties'
              ],
              presets: [
                '@babel/preset-env',
                '@babel/preset-react'
              ]
            }
          }
        }
      ]
    },
    resolve: {
      symlinks: false,
      extensions: [
        '.web.js',
        '.web.json',
        '.js',
        '.json'
      ],
      modules: [
        sourcePath,
        'node_modules'
      ]
    },
    plugins,
    devServer: {
      contentBase: distPath,
      host,
      port,
      compress: false,
      stats: 'minimal'
    }
  }
}

module.exports = configWebpack
