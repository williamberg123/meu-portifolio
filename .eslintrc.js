module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    indent: 'off',
    'eol-last': 'off',
    'comma-dangle': 'off',
    'space-before-blocks': 'off',
    'react/jsx-indent': 'off',
    'padded-blocks': 'off',
    'object-curly-spacing': 'off',
    'react/jsx-indent-props': 'off',
    'array-bracket-spacing': 'off',
    'max-len': 'off',
    'no-tabs': 'off',
    'react/jsx-filename-extension': 'off',
    'arrow-parens': 'off',
    'react/jsx-one-expression-per-line': 'off',
    'no-trailing-spaces': 'off',
    'array-callback-return': 'off',
    'object-curly-newline': 'off',
    'arrow-body-style': 'off',
    'no-alert': 'off'
  },
};
