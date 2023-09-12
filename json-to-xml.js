const fs = require('fs');
var jsonxml = require('jsontoxml');

const data = fs.readFileSync('sample.json', 'utf8');
// console.log(data);

const xml = jsonxml(data)
console.log(xml);

fs.writeFileSync('sample.xml', xml);

