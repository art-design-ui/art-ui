const TerserPlugin = require('terser-webpack-plugin')
let maxAssetSize = 1024 * 1024
let minSize = 30000
module.exports = {
  stories: ['../src/**/*.stories.(mdx)'],
  addons: [
    {
      name: '@storybook/addon-docs',
      options: {
        configureJSX: true,
      },
    },
  ],
  managerWebpack: async config => {
    config.optimization.splitChunks = { chunks: 'all', maxSize: maxAssetSize }
    const isprod = config.mode === 'production'
    let tser = isprod
      ? [
          new TerserPlugin({
            terserOptions: {
              parse: {
                ecma: 8,
              },
              compress: {
                ecma: 5,
                warnings: true,
                comparisons: true,
                inline: 2,
              },
              mangle: {
                safari10: true,
              },
              output: {
                ecma: 5,
                comments: true,
                ascii_only: true,
              },
            },
          }),
        ]
      : []
    config.performance = {
      maxAssetSize: maxAssetSize,
    }
    config.optimization = {
      minimizer: tser,
      minimize: isprod ? true : true,
      splitChunks: {
        chunks: 'all',
        maxSize: maxAssetSize,
        minSize,
      },
      runtimeChunk: true,
    }
    return config
  },
  webpackFinal: async config => {
    config.module.rules.push({
      test: /\.(ts|tsx)$/,
      use: [
        {
          loader: 'babel-loader',
        },
        {
          loader: require.resolve('react-docgen-typescript-loader'),
          options: {
            shouldExtractLiteralValuesFromEnum: true,
            propFilter: prop => {
              if (prop.parent) {
                return !prop.parent.fileName.includes('node_modules')
              }
              return true
            },
          },
        },
      ],
    })
    config.module.rules.push({
      test: /\.less$/,
      use: [
        {
          loader: 'style-loader',
        },
        {
          loader: 'css-loader',
        },
        {
          loader: 'less-loader',
        },
      ],
    })
    config.module.rules.push({
      test: /\.(gif|jpe?g|png|svg)$/,
      use: {
        loader: 'url-loader',
        options: { name: '[name].[ext]' },
      },
    })
    const isprod = config.mode === 'production'
    isprod ? (config.devtool = 'none') : (config.devtool = 'none')

    let tser = isprod ? config.optimization.minimizer : config.optimization.minimize

    config.performance = {
      maxAssetSize: maxAssetSize,
    }
    config.optimization = {
      minimizer: tser,
      minimize: isprod ? true : true,
      splitChunks: {
        chunks: 'all',
        maxSize: maxAssetSize,
        minSize,
      },
      runtimeChunk: true,
    }
    config.resolve.extensions.push('.ts', '.tsx')
    return config
  },
}
