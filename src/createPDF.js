const pdf = require("html-pdf");
const options = require("./config");

module.exports = {
  generate: function(html) {
    pdf
      .create(html, options.config)
      .toFile("./docs/contrato.pdf", function(err, res) {
        if (err) return console.log(err);
        console.log(res);
      });
  }
};
