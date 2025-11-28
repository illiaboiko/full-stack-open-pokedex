module.exports = {
  env: {
    es6: true,
    'jest/globals': true,
  },

  extends: ['eslint:recommended', 'plugin:react/recommended'],

  parserOptions: {
    ecmaFeatures: { jsx: true },
    ecmaVersion: 2018,
    sourceType: 'module',
  },

  plugins: ['react', 'jest'],

  rules: {
    indent: ['error', 2],
    'linebreak-style': ['error', 'unix'],
    quotes: ['error', 'single'],
    semi: ['error', 'never'],
    eqeqeq: 'error',
    'no-trailing-spaces': 'error',
    'object-curly-spacing': ['error', 'always'],
    'arrow-spacing': ['error', { before: true, after: true }],
    'no-console': 'error',
    'react/prop-types': 0,
  },

  // ---------------------
  // OVERRIDES BY CONTEXT
  // ---------------------
  overrides: [
    // FRONTEND (browser) — all frontend JS/JSX in src/
    {
      files: ['src/**/*.{js,jsx}'],
      env: { browser: true },
    },

    // BACKEND (Node) — your Express server
    {
      files: ['app.js'],
      env: { node: true },
    },

    // CONFIG FILES — always Node
    {
      files: ['webpack.config.js', 'eslintrc.js'],
      env: { node: true },
    },

    // TESTS — Jest runs in Node
    {
      files: ['test/**/*.js'],
      env: { node: true },
    },
  ],
}
