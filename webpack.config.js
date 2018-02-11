const buildConfig = function (env) {
  const nodeEnv = (env && env.nodeEnv) || 'dev'
  return require(`./scripts/webpack/${nodeEnv}.js`)(env)
}

module.exports = buildConfig
