const dev = require('mozilla-neo/config/webpack.dev.js');
dev.target = 'electron-renderer'

module.exports = dev;
