const withAntdLess = require('next-plugin-antd-less')

module.exports = withAntdLess({
  cssLoaderOptions: {},
  typescript: {
    ignoreBuildErrors: true,
  },
  webpack(config) {
    return config
  },
})
