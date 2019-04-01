

//#(function(exports, module, __filename, __dirname){

console.log(__filename);
console.log(__dirname);


var url = 'http://get.io/log';

function logs(msg1) {
    console.log(msg1);
}

//# module.exports = logs;
module.exports.got = logs;
//# exports = logs; // module.exports

//#})();
