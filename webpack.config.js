const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  mode: "production",
  entry: {
    index: './src/static/js/scripts/index.js',
    email: './src/static/js/scripts/email.js',
  },
  output: {
    filename: 'static/js/[name].js',
    path: path.resolve(__dirname, 'public/'),
  },
  plugins: [
    new CopyPlugin([
      { from: '*', context: "src/"},
      { from: 'static/*', context: "src/"},
      { from: 'static/css/*', context: "src/"},
    ]),
  ],
};
