const pdf = require('html-pdf');

const invoiceReq = (renderer) => {
  const invoice_options =
  {
    "format": "A4",
    "border": {
      "top": "0.5in",
      "right": "1in",
      "bottom": "0in",
      "left": "1in"
    }
  };
  const getFn = (req, res) => {
    if(!req.body) return res.status(500).json({error_message: 'problem parsing json body'});
    var renderedHtml = renderer.render('invoice.tmpl.html', req.body);
    pdf.create(renderedHtml, invoice_options).toStream(function(err, stream){
        stream.pipe(res);
    });
  };
  return {
    get: getFn
  };
};

module.exports = invoiceReq;
