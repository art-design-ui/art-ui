module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'airbnb-typescript',
    'plugin:@typescript-eslint/recommended',
    'prettier/@typescript-eslint',
    'plugin:prettier/recommended',
  ],
  plugins: ['react-hooks', 'prettier'],
  rules: {
    'prettier/prettier': 'error',
    'import/extensions': 0,
    'import/no-cycle': 0,
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
    'import/no-named-as-default': 0,
    'react/jsx-props-no-spreading': 0,
    'import/prefer-default-export': 0,
    'react/button-has-type': 0,
    'react-hooks/rules-of-hooks': 'error', // 检查 Hook 的规则
    'react-hooks/exhaustive-deps': 'warn', // 检查 effect 的依赖
    'no-console': 'off',
    'no-void': 'off',
    '@typescript-eslint/dot-notation': ['error'],
  },
}
