/**
 * New node file
 */
var Constants = require('./lib/Constants');
var IptCommand = require('./lib/IptCommand');

console.log("Write PUBLIC_LOGIN_REQUEST");
var iptCommand_A = new IptCommand(Constants.PUBLIC_LOGIN_REQUEST);
iptCommand_A.getHeader().setSequenceNumber(0);
iptCommand_A.getHeader().setReserved(0);
iptCommand_A.getHeader().setConnectionId(0);
iptCommand_A.getMessage().setAccount("admin");
iptCommand_A.getMessage().setPassword("password");
var buffer = iptCommand_A.write();
console.log("Parse PUBLIC_LOGIN_REQUEST");
var iptCommand_B = IptCommand.parse(buffer.buffer);

console.log("");

console.log("Write CONNECTION_CLOSE_RESPONSE");
var iptCommand_A = new IptCommand(Constants.CONNECTION_CLOSE_RESPONSE);
iptCommand_A.getHeader().setSequenceNumber(0);
iptCommand_A.getHeader().setReserved(0);
iptCommand_A.getHeader().setConnectionId(0);
iptCommand_A.getMessage().setResponse(Constants.CONNECTION_CLOSE_RESPONSE);
var buffer = iptCommand_A.write();
console.log("Parse CONNECTION_CLOSE_RESPONSE");
var iptCommand_B = IptCommand.parse(buffer.buffer);

console.log("");

console.log("Write CONNECTION_OPEN_REQUEST");
var iptCommand_A = new IptCommand(Constants.CONNECTION_OPEN_REQUEST);
iptCommand_A.getHeader().setSequenceNumber(0);
iptCommand_A.getHeader().setReserved(0);
iptCommand_A.getHeader().setConnectionId(0);
iptCommand_A.getMessage().setAddress("192.168.1.23");
var buffer = iptCommand_A.write();
console.log("Parse CONNECTION_OPEN_REQUEST");
var iptCommand_B = IptCommand.parse(buffer.buffer);

console.log("");

console.log("Write CONNECTION_OPEN_RESPONSE");
var iptCommand_X = new IptCommand(Constants.CONNECTION_OPEN_RESPONSE);
iptCommand_X.getHeader().setSequenceNumber(0);
iptCommand_X.getHeader().setReserved(0);
iptCommand_X.getHeader().setConnectionId(0);
iptCommand_X.getMessage().setResponse(Constants.CONNECTION_OPEN_RESPONSE);
var buffer = iptCommand_X.write();
console.log("Parse CONNECTION_OPEN_RESPONSE");
var iptCommand_C = IptCommand.parse(buffer.buffer);

console.log("");

console.log("Write DATA_TRANSFER_REQUEST");
var iptCommand_X = new IptCommand(Constants.DATA_TRANSFER_REQUEST);
iptCommand_X.getHeader().setSequenceNumber(0);
iptCommand_X.getHeader().setReserved(0);
iptCommand_X.getHeader().setConnectionId(0);
iptCommand_X.getMessage().setDataBlock(new Buffer(128));
var buffer = iptCommand_X.write();
console.log("Parse DATA_TRANSFER_REQUEST");
var iptCommand_C = IptCommand.parse(buffer.buffer);

console.log("");

console.log("Write DATA_TRANSFER_RESPONSE");
var iptCommand_X = new IptCommand(Constants.DATA_TRANSFER_RESPONSE);
iptCommand_X.getHeader().setSequenceNumber(0);
iptCommand_X.getHeader().setReserved(0);
iptCommand_X.getHeader().setConnectionId(0);
iptCommand_X.getMessage().setResponse(Constants.DATA_TRANSFER_RESPONSE);
var buffer = iptCommand_X.write();
console.log("Parse DATA_TRANSFER_RESPONSE");
var iptCommand_C = IptCommand.parse(buffer.buffer);

console.log("");

console.log("Write DEVICE_AUTHENTICATION_RESPONSE");
var iptCommand_X = new IptCommand(Constants.DEVICE_AUTHENTICATION_RESPONSE);
iptCommand_X.getHeader().setSequenceNumber(0);
iptCommand_X.getHeader().setReserved(0);
iptCommand_X.getHeader().setConnectionId(0);
iptCommand_X.getMessage().setAccount("username");
iptCommand_X.getMessage().setPassword("password");
iptCommand_X.getMessage().setAddress("192.168.1.1");
iptCommand_X.getMessage().setDescription("Test");
var buffer = iptCommand_X.write();
console.log("Parse DEVICE_AUTHENTICATION_RESPONSE");
var iptCommand_C = IptCommand.parse(buffer.buffer);

console.log("");

console.log("Write DEVICE_IDENTIFIER_RESPONSE");
var iptCommand_X = new IptCommand(Constants.DEVICE_IDENTIFIER_RESPONSE);
iptCommand_X.getHeader().setSequenceNumber(0);
iptCommand_X.getHeader().setReserved(0);
iptCommand_X.getHeader().setConnectionId(0);
iptCommand_X.getMessage().setDeviceId("klndfkjntjk345nrn");
var buffer = iptCommand_X.write();
console.log("Parse DEVICE_IDENTIFIER_RESPONSE");
var iptCommand_C = IptCommand.parse(buffer.buffer);

console.log("");

console.log("Write DEVICE_SOFTWARE_RESPONSE");
var iptCommand_X = new IptCommand(Constants.DEVICE_SOFTWARE_RESPONSE);
iptCommand_X.getHeader().setSequenceNumber(0);
iptCommand_X.getHeader().setReserved(0);
iptCommand_X.getHeader().setConnectionId(0);
iptCommand_X.getMessage().setVersion("1.0");
var buffer = iptCommand_X.write();
console.log("Parse DEVICE_SOFTWARE_RESPONSE");
var iptCommand_C = IptCommand.parse(buffer.buffer);

console.log("");

console.log("Write DEVICE_TIME_RESPONSE");
var iptCommand_X = new IptCommand(Constants.DEVICE_TIME_RESPONSE);
iptCommand_X.getHeader().setSequenceNumber(0);
iptCommand_X.getHeader().setReserved(0);
iptCommand_X.getHeader().setConnectionId(0);
iptCommand_X.getMessage().setTime("234235435");
var buffer = iptCommand_X.write();
console.log("Parse DEVICE_TIME_RESPONSE");
var iptCommand_C = IptCommand.parse(buffer.buffer);

console.log("");

console.log("Write IP_STATISTIC_RESPONSE");
var iptCommand_X = new IptCommand(Constants.IP_STATISTIC_RESPONSE);
iptCommand_X.getHeader().setSequenceNumber(0);
iptCommand_X.getHeader().setReserved(0);
iptCommand_X.getHeader().setConnectionId(0);
iptCommand_X.getMessage().setResponse(0);
iptCommand_X.getMessage().setIpRx(45);
iptCommand_X.getMessage().setIpTx(535);
var buffer = iptCommand_X.write();
console.log("Parse IP_STATISTIC_RESPONSE");
var iptCommand_C = IptCommand.parse(buffer.buffer);

console.log("");

console.log("Write LOGOUT_RESPONSE");
var iptCommand_X = new IptCommand(Constants.LOGOUT_RESPONSE);
iptCommand_X.getHeader().setSequenceNumber(0);
iptCommand_X.getHeader().setReserved(0);
iptCommand_X.getHeader().setConnectionId(0);
iptCommand_X.getMessage().setResponse(Constants.LOGOUT_RESPONSE);
var buffer = iptCommand_X.write();
console.log("Parse LOGOUT_RESPONSE");
var iptCommand_C = IptCommand.parse(buffer.buffer);

console.log("");

console.log("Write MAINTENANCE_REQUEST");
var iptCommand_X = new IptCommand(Constants.MAINTENANCE_REQUEST);
iptCommand_X.getHeader().setSequenceNumber(0);
iptCommand_X.getHeader().setReserved(0);
iptCommand_X.getHeader().setConnectionId(0);
iptCommand_X.getMessage().setIdleTime(213);
iptCommand_X.getMessage().setNewAddress("192.168.1.1");
var buffer = iptCommand_X.write();
console.log("Parse MAINTENANCE_REQUEST");
var iptCommand_C = IptCommand.parse(buffer.buffer);

