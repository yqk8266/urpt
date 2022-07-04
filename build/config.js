var path = require('path');
var fs = require('fs');
var nodeExternals = require('webpack-node-externals');
var Components = require('../components.json');

var utilsList = fs.readdirSync(path.resolve(__dirname, '../src/utils'));
var mixinsList = fs.readdirSync(path.resolve(__dirname, '../src/mixins'));
var transitionList = fs.readdirSync(path.resolve(__dirname, '../src/transitions'));
var externals = {};

Object.keys(Components).forEach(function(key) {
  externals[`urpt-ui/packages/${key}`] = `urpt-ui/lib/${key}`;
});

externals['urpt-ui/src/locale'] = 'urpt-ui/lib/locale';
utilsList.forEach(function(file) {
  file = path.basename(file, '.js');
  externals[`urpt-ui/src/utils/${file}`] = `urpt-ui/lib/utils/${file}`;
});
mixinsList.forEach(function(file) {
  file = path.basename(file, '.js');
  externals[`urpt-ui/src/mixins/${file}`] = `urpt-ui/lib/mixins/${file}`;
});
transitionList.forEach(function(file) {
  file = path.basename(file, '.js');
  externals[`urpt-ui/src/transitions/${file}`] = `urpt-ui/lib/transitions/${file}`;
});

externals = [Object.assign({
  vue: 'vue'
}, externals), nodeExternals()];

exports.externals = externals;

exports.alias = {
  main: path.resolve(__dirname, '../src'),
  packages: path.resolve(__dirname, '../packages'),
  demos: path.resolve(__dirname, '../demos'),
  'urpt-ui': path.resolve(__dirname, '../')
};

exports.vue = {
  root: 'Vue',
  commonjs: 'vue',
  commonjs2: 'vue',
  amd: 'vue'
};

exports.jsexclude = /node_modules|utils\/popper\.js|utils\/date\.js/;
