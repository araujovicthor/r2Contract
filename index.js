const fs = require("fs");
const createPDF = require("./src/createPDF");
const mustache = require("mustache");

const dir = "./bib/bm-v1.html";
const html = fs.readFileSync(dir, "utf8");

let person = {
  name: "Christophe",
  lastName: "Coenraets",
  cpf: "123.456.789-10"
};

let output = mustache.to_html(html, person);

createPDF.generate(output);
