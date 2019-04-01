
var url = 'http://get.io/log';

function logs(msg1) {
    console.log(msg1);
}

module.exports.got = logs;
module.exports.baseurl = url;