
const os = require('os');

var totalMemory = os.totalmem();
console.log('Total memory ' + totalMemory);
var freeMemory = os.freemem();
console.log('Free memory ' + freeMemory);

// Template tring
// ES6/ECMAScript 6