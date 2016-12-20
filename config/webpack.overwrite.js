const prod = require('mozilla-neo/config/webpack.prod.js');
prod.output.publicPath = '';
prod.target = 'electron-renderer'

module.exports = prod;
