var fs = require('fs');
var path = require('path');
var version = process.env.VERSION || require('../../package.json').version;
var content = {};
if (!content[version]) content[version] = '2.15';
fs.writeFileSync(path.resolve(__dirname, '../../demos/versions.json'), JSON.stringify(content));
