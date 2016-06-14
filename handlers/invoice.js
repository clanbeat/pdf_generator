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
    },
    "footer": {
      "height": "32mm",
      "contents": "<div style='color:#444;'><div style='Float:left;text-align:left;'>Clanbeat Inc <br />548 Market st. 63570 <br />San Fransisco, Ca 94104 <br /></div><div style='float:right;text-align:right;vertical-align:bottom;'>www.clanbeat.com</div></div>"
    },
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
