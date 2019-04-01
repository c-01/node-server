
//@ file systems

const fs = require('fs');

// const files = fs.readdirSync('./'); // not has callback fn
// console.log(files); // [ '.git', '.gitignore', 'app.js', 'logger.js', 'package.json' ]

fs.readdir('./', function(err, files) {
    if (err) console.log('Error ' + err);
     else console.log('Result ', files);
     
});
