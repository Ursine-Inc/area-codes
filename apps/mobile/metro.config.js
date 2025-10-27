const { withNxMetro } = require('@nx/expo');
const { getDefaultConfig } = require('@expo/metro-config');
const path = require('path');

const projectRoot = __dirname;
console.debug(projectRoot);
const defaultConfig = getDefaultConfig(projectRoot);

module.exports = withNxMetro(
  {
    ...defaultConfig,
  },
  {
    debug: true,
    extensions: [],
    watchFolders: [],
  }
);
