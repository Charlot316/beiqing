const webpack = require('webpack');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

module.exports = (configEnv) => {
  const { ANA_TYPE } = configEnv;

  return [
    new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
    ANA_TYPE && new BundleAnalyzerPlugin(),
  ].filter(Boolean);
};
