const { override, fixBabelImports, addLessLoader } = require('customize-cra');

module.exports = override(
    fixBabelImports('import', {
      libraryName: 'antd',
      libraryDirectory: 'es',
      style: true
    }),
    addLessLoader({
      lessOptions: {
        javascriptEnabled: true,
        modifyVars: { "@primary-color": "#006aa6", "@font-family": "'Noto Sans TC'"}
      }
    })
)