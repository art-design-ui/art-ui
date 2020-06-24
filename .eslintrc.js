module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'airbnb-typescript',
    'plugin:@typescript-eslint/recommended',
    'prettier/@typescript-eslint',
    'plugin:prettier/recommended',
  ],
  parserOptions: {
    project: './tsconfig.json',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
    extraFileExtensions: ['.js', '.jsx', '.ts', '.tsx'],
  },
  rules: {
    'import/extensions': 0,
    'import/no-cycle': 0,
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
    "import/no-named-as-default": 0,
    "react/jsx-props-no-spreading": 0,
    "import/prefer-default-export": 0,
    "react/button-has-type": 0
  },
}
