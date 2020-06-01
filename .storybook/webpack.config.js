module.exports = ({ config }) => {
  config.module.rules.push({
    test: /\.tsx?$/,
    use: [
      {
        loader: require.resolve('babel-loader'),
        options: {
          presets: [require.resolve('babel-preset-react-app')],
        },
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
    test: /\.(css|scss)$/,
    exclude: /node_modules/,
    use: ['style-loader', 'css-loader', 'sass-loader'],
  })
  config.resolve.extensions.push('.ts', '.tsx')

  return config
}
