module.exports = {
  config: {
    // // Export options
    // "directory": "/tmp",       // The directory the file gets written into if not using .toFile(filename, callback). default: '/tmp'

    // // Papersize Options: http://phantomjs.org/api/webpage/property/paper-size.html
    // "height": "10.5in",        // allowed units: mm, cm, in, px
    // "width": "8in",            // allowed units: mm, cm, in, px
    // - or -
    format: "A4", // allowed units: A3, A4, A5, Legal, Letter, Tabloid
    orientation: "portrait", // portrait or landscape

    // // Page options
    // "border": "0",             // default is 0, units: mm, cm, in, px
    // - or -
    border: {
      top: "2cm", // default is 0, units: mm, cm, in, px
      right: "1cm",
      bottom: "1cm",
      left: "1cm"
    },

    paginationOffset: 1, // Override the initial pagination number
    // header: {
    //   // height: "45mm",
    //   contents: '<img src="teste.jpg">'
    // },
    footer: {
      height: "25mm",
      contents:
        '<div style="text-align: center; font-size: 10px">Esta é a página <span>{{page}}</span>/<span>{{pages}}</span> do contrato gerado usando a tecnologia <a href="ruadois.com.br">RuaDois</a><br></div>'
    },

    // // Rendering options
    // "base": "file:///home/www/your-asset-path", // Base path that's used to load files (images, css, js) when they aren't referenced using a host

    // // Zooming option, can be used to scale images if `options.type` is not pdf
    // "zoomFactor": "1", // default is 1

    // File options
    type: "pdf" // allowed file types: png, jpeg, pdf
    // "quality": "75",           // only used for types png & jpeg

    // // Script options
    // "phantomPath": "./node_modules/phantomjs/bin/phantomjs", // PhantomJS binary which should get downloaded automatically
    // "phantomArgs": [], // array of strings used as phantomjs args e.g. ["--ignore-ssl-errors=yes"]
    // "script": '/url',           // Absolute path to a custom phantomjs script, use the file in lib/scripts as example
    // "timeout": 30000,           // Timeout that will cancel phantomjs, in milliseconds

    // // Time we should wait after window load
    // // accepted values are 'manual', some delay in milliseconds or undefined to wait for a render event
    // "renderDelay": 1000,

    // // HTTP Headers that are used for requests
    // "httpHeaders": {
    //   // e.g.
    //   "Authorization": "Bearer ACEFAD8C-4B4D-4042-AB30-6C735F5BAC8B"
    // },

    // // To run Node application as Windows service
    // "childProcessOptions": {
    //   "detached": true
    // }

    // // HTTP Cookies that are used for requests
    // "httpCookies": [
    //   // e.g.
    //   {
    //     "name": "Valid-Cookie-Name", // required
    //     "value": "Valid-Cookie-Value", // required
    //     "domain": "localhost",
    //     "path": "/foo", // required
    //     "httponly": true,
    //     "secure": false,
    //     "expires": (new Date()).getTime() + (1000 * 60 * 60) // e.g. expires in 1 hour
    //   }
    // ]
  }
};
