const { override, addBabelPlugins } = require('customize-cra');
const { alias, configPaths } = require('react-app-rewire-alias');

module.exports = override(
  addBabelPlugins('babel-plugin-relay'),
  alias({
    ...configPaths('tsconfig.paths.json'),
  }),
);
