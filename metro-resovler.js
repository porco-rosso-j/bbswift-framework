const path = require('path');

function customResolver(context, moduleName, platform) {
  if (moduleName === '@aztec/bb.js') {
    console.log('Using @aztec/bb.js for:', moduleName);
    return {
      filePath: path.resolve(__dirname, './dest/index.js'),
      type: 'sourceFile'
    };
  }

  if (
    moduleName === '@aztec/circuits.js/dest/crypto/index.js' ||
    moduleName.endsWith('/crypto/index.js')
  ) {
    console.log('replacing circuits.js');
    return {
      filePath: path.resolve(__dirname, './dest/circuits.js-crypto/index.js'),
      type: 'sourceFile'
    };
  }

  // Default resolution for all other modules
  return context.resolveRequest(context, moduleName, platform);
}

module.exports = customResolver;
