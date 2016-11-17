var nameHtml = "index";
var namePdf = "index";

var fs = require('fs');
var pdf = require('html-pdf');
var path = require('path');
var html = fs.readFileSync('./' + nameHtml + '.html', 'utf8');
var options = {
  // Papersize Options: http://phantomjs.org/api/webpage/property/paper-size.html 
  "format": "A4",        // allowed units: A3, A4, A5, Legal, Letter, Tabloid 
  "orientation": "landscape", // portrait or landscape 
 
  // Page options 
  "border": {
    "top": "0",            // default is 0, units: mm, cm, in, px 
    "right": "0",
    "bottom": "0",
    "left": "0"
  },
  
  // Rendering options 
  "base": "file://" + path.resolve(nameHtml + ".html"), // Base path that's used to load files (images, css, js) when they aren't referenced using a host 
 
  // Zooming option, can be used to scale images if `options.type` is not pdf 
  "zoomFactor": "1", // default is 1 
 
  // File options 
  "type": "pdf",             // allowed file types: png, jpeg, pdf 
  "quality": "75",           // only used for types png & jpeg 
 
  // Script options 
  // "phantomPath": "./node_modules/phantomjs/bin/phantomjs", // PhantomJS binary which should get downloaded automatically 
  // "phantomArgs": [], // array of strings used as phantomjs args e.g. ["--ignore-ssl-errors=yes"] 
  // "timeout": 30000,           // Timeout that will cancel phantomjs, in milliseconds  
}

pdf.create(html, options).toFile('./' + namePdf + '.pdf', function(err, res) {
  	console.log(err, res); 
	process.exit();
});