module.exports = {
  plugins: [
    ['@babel/plugin-transform-modules-umd', {
      exactGlobals: true,
      globals: {
        index: 'derange'
      }
    }]
  ],
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current'
        }
      }
    ]
  ]
}
