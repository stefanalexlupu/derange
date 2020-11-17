module.exports = {
  env: {
    browser: true,
    es2020: true,
    jest: true
  },
  ignorePatterns: [
    'lib/*',
    'examples/*'
  ],
  extends: [
    'standard'
  ],
  parserOptions: {
    ecmaVersion: 11,
    sourceType: 'module'
  },
  rules: {
  }
}
