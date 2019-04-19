const pdf = require('html-pdf');

module.exports = {

    gen: function(html){
        let options = { format: 'A4' };

        pdf.create(html, options).toFile('./docs/contrato.pdf', function(err, res) {
        if (err) return console.log(err);
        console.log(res);
        });
    }

};