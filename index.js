const fs = require('fs');
const createPDF = require('./src/createPDF');
const dir = './bib/bm-v2.html';
const html = fs.readFileSync(dir, 'utf8');

createPDF.gen(html);