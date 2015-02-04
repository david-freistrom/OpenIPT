var IptBuffer = require('./lib/IptBuffer');

var buffer = new Buffer("0102030405060708090001020304050607080900010203040506070809000001", 'hex');

console.log(buffer.toString('hex'));
