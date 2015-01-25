/**
 * New node file
 */
var Constants = require('./Constants');

var MsgConnectionCloseResponse = require('./messages/MsgConnectionCloseResponse');
var MsgConnectionOpenRequest = require('./messages/MsgConnectionOpenRequest');
var MsgConnectionOpenResponse = require('./messages/MsgConnectionOpenResponse');
var MsgDataTransferRequest = require('./messages/MsgDataTransferRequest');
var MsgDataTransferResponse = require('./messages/MsgDataTransferResponse');
var MsgDeviceAuthenticationResponse = require('./messages/MsgDeviceAuthenticationResponse');
var MsgDeviceIdentifierResponse = require('./messages/MsgDeviceIdentifierResponse');
var MsgDeviceSoftwareResponse = require('./messages/MsgDeviceSoftwareResponse');
var MsgDeviceTimeResponse = require('./messages/MsgDeviceTimeResponse');
var MsgIPStatisticResponse = require('./messages/MsgIPStatisticResponse');
var MsgLogoutResponse = require('./messages/MsgLogoutResponse');
var MsgMaintenanceRequest = require('./messages/MsgMaintenanceRequest');
var MsgMaintenanceResponse = require('./messages/MsgMaintenanceResponse');
var MsgMultiPublicLoginRequest = require('./messages/MsgMultiPublicLoginRequest');
var MsgMultiPublicLoginResponse = require('./messages/MsgMultiPublicLoginResponse');
var MsgMultiScrambledLoginRequest = require('./messages/MsgMultiScrambledLoginRequest');
var MsgMultiScrambledLoginResponse = require('./messages/MsgMultiScrambledLoginResponse');
var MsgNetworkStatusResponse = require('./messages/MsgNetworkStatusResponse');
var MsgProtocolVersionResponse = require('./messages/MsgProtocolVersionResponse');
var MsgPublicLoginRequest = require('./messages/MsgPublicLoginRequest');
var MsgPublicLoginResponse = require('./messages/MsgPublicLoginResponse');
var MsgPushChannelCloseRequest = require('./messages/MsgPushChannelCloseRequest');
var MsgPushChannelCloseResponse = require('./messages/MsgPushChannelCloseResponse');
var MsgPushChannelOpenRequest = require('./messages/MsgPushChannelOpenRequest');
var MsgPushChannelOpenResponse = require('./messages/MsgPushChannelOpenResponse');
var MsgPushDataTransferRequest = require('./messages/MsgPushDataTransferRequest');
var MsgPushDataTransferResponse = require('./messages/MsgPushDataTransferResponse');
var MsgPushTargetDeregisterRequest = require('./messages/MsgPushTargetDeregisterRequest');
var MsgPushTargetDeregisterResponse = require('./messages/MsgPushTargetDeregisterResponse');
var MsgPushTargetNamelistRequest = require('./messages/MsgPushTargetNamelistRequest');
var MsgPushTargetNamelistResponse = require('./messages/MsgPushTargetNamelistResponse');
var MsgPushTargetRegisterRequest = require('./messages/MsgPushTargetRegisterRequest');
var MsgPushTargetRegisterResponse = require('./messages/MsgPushTargetRegisterResponse');
var MsgScrambledLoginRequest = require('./messages/MsgScrambledLoginRequest');
var MsgScrambledLoginResponse = require('./messages/MsgScrambledLoginResponse');
var MsgServerModeReconnectRequest = require('./messages/MsgServerModeReconnectRequest');
var MsgServerModeReconnectResponse = require('./messages/MsgServerModeReconnectResponse');
var MsgServerModeRequest = require('./messages/MsgServerModeRequest');
var MsgServerModeResponse = require('./messages/MsgServerModeResponse');
var MsgStreamChannelCloseRequest = require('./messages/MsgStreamChannelCloseRequest');
var MsgStreamChannelCloseResponse = require('./messages/MsgStreamChannelCloseResponse');
var MsgStreamChannelOpenRequest = require('./messages/MsgStreamChannelOpenRequest');
var MsgStreamChannelOpenResponse = require('./messages/MsgStreamChannelOpenResponse');
var MsgStreamDataTransferRequest = require('./messages/MsgStreamDataTransferRequest');
var MsgStreamDataTransferResponse = require('./messages/MsgStreamDataTransferResponse');
var MsgStreamSourceDeregisterRequest = require('./messages/MsgStreamSourceDeregisterRequest');
var MsgStreamSourceDeregisterResponse = require('./messages/MsgStreamSourceDeregisterResponse');
var MsgStreamSourceRegisterRequest = require('./messages/MsgStreamSourceRegisterRequest');
var MsgStreamSourceRegisterResponse = require('./messages/MsgStreamSourceRegisterResponse');
var MsgTracerouteRequest = require('./messages/MsgTracerouteRequest');
var MsgTracerouteResponse = require('./messages/MsgTracerouteResponse');

var MsgUnknownCommandResponse = require('./messages/MsgUnknownCommandResponse');


function IptMessage(commandTag){
	
	switch(commandTag) {
		case Constants.UNKNOWN_COMMAND_RESPONSE:
			return new MsgUnknownCommandResponse();
			break;
			
		case Constants.PUBLIC_LOGIN_REQUEST:
			return new MsgPublicLoginRequest();
			break;
			
		case Constants.PUBLIC_LOGIN_RESPONSE:
			return new MsgPublicLoginResponse();
			break;
			
		case Constants.SCRAMBLED_LOGIN_REQUEST:
			return new MsgScrambledLoginRequest();
			break;
			
		case Constants.SCRAMBLED_LOGIN_RESPONSE:
			return new MsgScrambledLoginResponse();
			break;
			
		case Constants.MULTI_PUBLIC_LOGIN_REQUEST:
			return new MsgMultiPublicLoginRequest();
			break;
			
		case Constants.MULTI_PUBLIC_LOGIN_RESPONSE:
			return new MsgMultiPublicLoginResponse();
			break;
			
		case Constants.MULTI_SCRAMBLED_LOGIN_REQUEST:
			return new MsgMultiScrambledLoginRequest();
			break;
			
		case Constants.MULTI_SCRAMBLED_LOGIN_RESPONSE:
			return new MsgMultiScrambledLoginResponse();
			break;
			
		case Constants.LOGOUT_RESPONSE:
			return new MsgLogoutResponse();
			break;
			
		case Constants.MAINTENANCE_REQUEST:
			return new MsgMaintenanceRequest();
			break;
			
		case Constants.MAINTENANCE_RESPONSE:
			return new MsgMaintenanceResponse();
			break;
			
		case Constants.PUSH_CHANNEL_OPEN_REQUEST:
			return new MsgPushChannelOpenRequest();
			break;
			
		case Constants.PUSH_CHANNEL_OPEN_RESPONSE:
			return new MsgPushChannelOpenResponse();
			break;
			
		case Constants.PUSH_CHANNEL_CLOSE_REQUEST:
			return new MsgPushChannelCloseRequest();
			break;
			
		case Constants.PUSH_CHANNEL_CLOSE_RESPONSE:
			return new MsgPushChannelCloseResponse();
			break;
			
		case Constants.PUSH_DATA_TRANSFER_REQUEST:
			return new MsgPushDataTransferRequest();
			break;
			
		case Constants.PUSH_DATA_TRANSFER_RESPONSE:
			return new MsgPushDataTransferResponse();
			break;
			
		case Constants.PUSH_TARGET_NAMELIST_REQUEST:
			return new MsgPushTargetNamelistRequest();
			break;
			
		case Constants.PUSH_TARGET_NAMELIST_RESPONSE:
			return new MsgPushTargetNamelistResponse();
			break;
			
		case Constants.PUSH_TARGET_REGISTER_REQUEST:
			return new MsgPushTargetRegisterRequest();
			break;
			
		case Constants.PUSH_TARGET_REGISTER_RESPONSE:
			return new MsgPushTargetRegisterResponse();
			break;
			
		case Constants.PUSH_TARGET_DEREGISTER_REQUEST:
			return new MsgPushTargetDeregisterRequest();
			break;
			
		case Constants.PUSH_TARGET_DEREGISTER_RESPONSE:
			return new MsgPushTargetDeregisterResponse();
			break;
			
		case Constants.CONNECTION_OPEN_REQUEST:
			return new MsgConnectionOpenRequest();
			break;
			
		case Constants.CONNECTION_OPEN_RESPONSE:
			return new MsgConnectionOpenResponse();
			break;
			
		case Constants.CONNECTION_CLOSE_REQUEST:
			return new MsgConnectionCloseResponse();
			break;
			
		case Constants.CONNECTION_CLOSE_RESPONSE:
			return new MsgConnectionCloseResponse();
			break;
			
		case Constants.NETWORK_STATUS_RESPONSE:
			return new MsgNetworkStatusResponse();
			break;
			
		case Constants.PROTOCOL_VERSION_RESPONSE:
			return new MsgProtocolVersionResponse();
			break;
			
		case Constants.DEVICE_IDENTIFIER_RESPONSE:
			return new MsgDeviceIdentifierResponse();
			break;
			
		case Constants.DEVICE_AUTHENTICATION_REQUEST:
			return new MsgDeviceAuthenticationResponse();
			break;
			
		case Constants.DEVICE_AUTHENTICATION_RESPONSE:
			return new MsgDeviceAuthenticationResponse();
			break;
			
		case Constants.DEVICE_TIME_RESPONSE:
			return new MsgDeviceTimeResponse();
			break;
			
		case Constants.DEVICE_SOFTWARE_RESPONSE:
			return new MsgDeviceSoftwareResponse();
			break;
			
		case Constants.IP_STATISTIC_RESPONSE:
			return new MsgIPStatisticResponse();
			break;
			
		case Constants.TRACEROUTE_REQUEST:
			return new MsgTracerouteRequest();
			break;
			
		case Constants.TRACEROUTE_RESPONSE:
			return new MsgTracerouteResponse();
			break;
			
		case Constants.SERVER_MODE_REQUEST:
			return new MsgServerModeRequest();
			break;
			
		case Constants.SERVER_MODE_RESPONSE:
			return new MsgServerModeResponse();
			break;
			
		case Constants.SERVER_MODE_RECONNECT_REQUEST:
			return new MsgServerModeReconnectRequest();
			break;
			
		case Constants.SERVER_MODE_RECONNECT_RESPONSE:
			return new MsgServerModeReconnectResponse();
			break;
			
		case Constants.STREAM_SOURCE_REGISTER_REQUEST:
			return new MsgStreamSourceRegisterRequest();
			break;
			
		case Constants.STREAM_SOURCE_REGISTER_RESPONSE:
			return new MsgStreamSourceRegisterResponse();
			break;
			
		case Constants.STREAM_SOURCE_DEREGISTER_REQUEST:
			return new MsgStreamSourceDeregisterRequest();
			break;
			
		case Constants.STREAM_SOURCE_DEREGISTER_RESPONSE:
			return new MsgStreamSourceDeregisterResponse();
			break;
			
		case Constants.STREAM_CHANNEL_OPEN_REQUEST:
			return new MsgStreamChannelOpenRequest();
			break;
			
		case Constants.STREAM_CHANNEL_OPEN_RESPONSE:
			return new MsgStreamChannelOpenResponse();
			break;
			
		case Constants.STREAM_CHANNEL_CLOSE_REQUEST:
			return new MsgStreamChannelCloseRequest();
			break;
			
		case Constants.STREAM_CHANNEL_CLOSE_RESPONSE:
			return new MsgStreamChannelCloseResponse();
			break;
			
		case Constants.STREAM_DATA_TRANSFER_REQUEST:
			return new MsgStreamDataTransferRequest();
			break;
			
		case Constants.STREAM_DATA_TRANSFER_RESPONSE:
			return new MsgStreamDataTransferResponse();
			break;
			
		case Constants.DATA_TRANSFER_REQUEST:
			return new MsgDataTransferRequest();
			break;
			
		case Constants.DATA_TRANSFER_RESPONSE:
			return new MsgDataTransferResponse();
			break;
			
		 default:
	        return undefined;
	};
};

IptMessage.parse = function parse(buffer) {
	
	switch(buffer.buffer.readUInt16LE(0)) {
	case Constants.UNKNOWN_COMMAND_RESPONSE:
		return MsgUnknownCommandResponse.parse(buffer);
		break;
		
	case Constants.PUBLIC_LOGIN_REQUEST:
		return MsgPublicLoginRequest.parse(buffer);
		break;
		
	case Constants.PUBLIC_LOGIN_RESPONSE:
		return MsgPublicLoginResponse.parse(buffer);
		break;
		
	case Constants.SCRAMBLED_LOGIN_REQUEST:
		return MsgScrambledLoginRequest.parse(buffer);
		break;
		
	case Constants.SCRAMBLED_LOGIN_RESPONSE:
		return MsgScrambledLoginResponse.parse(buffer);
		break;
		
	case Constants.MULTI_PUBLIC_LOGIN_REQUEST:
		return MsgMultiPublicLoginRequest.parse(buffer);
		break;
		
	case Constants.MULTI_PUBLIC_LOGIN_RESPONSE:
		return MsgMultiPublicLoginResponse.parse(buffer);
		break;
		
	case Constants.MULTI_SCRAMBLED_LOGIN_REQUEST:
		return MsgMultiScrambledLoginRequest.parse(buffer);
		break;
		
	case Constants.MULTI_SCRAMBLED_LOGIN_RESPONSE:
		return MsgMultiScrambledLoginResponse.parse(buffer);
		break;
		
	case Constants.LOGOUT_RESPONSE:
		return MsgLogoutResponse.parse(buffer);
		break;
		
	case Constants.MAINTENANCE_REQUEST:
		return MsgMaintenanceRequest.parse(buffer);
		break;
		
	case Constants.MAINTENANCE_RESPONSE:
		return MsgMaintenanceResponse.parse(buffer);
		break;
		
	case Constants.PUSH_CHANNEL_OPEN_REQUEST:
		return MsgPushChannelOpenRequest.parse(buffer);
		break;
		
	case Constants.PUSH_CHANNEL_OPEN_RESPONSE:
		return MsgPushChannelOpenResponse.parse(buffer);
		break;
		
	case Constants.PUSH_CHANNEL_CLOSE_REQUEST:
		return MsgPushChannelCloseRequest.parse(buffer);
		break;
		
	case Constants.PUSH_CHANNEL_CLOSE_RESPONSE:
		return MsgPushChannelCloseResponse.parse(buffer);
		break;
		
	case Constants.PUSH_DATA_TRANSFER_REQUEST:
		return MsgPushDataTransferRequest.parse(buffer);
		break;
		
	case Constants.PUSH_DATA_TRANSFER_RESPONSE:
		return MsgPushDataTransferResponse.parse(buffer);
		break;
		
	case Constants.PUSH_TARGET_NAMELIST_REQUEST:
		return MsgPushTargetNamelistRequest.parse(buffer);
		break;
		
	case Constants.PUSH_TARGET_NAMELIST_RESPONSE:
		return MsgPushTargetNamelistResponse.parse(buffer);
		break;
		
	case Constants.PUSH_TARGET_REGISTER_REQUEST:
		return MsgPushTargetRegisterRequest.parse(buffer);
		break;
		
	case Constants.PUSH_TARGET_REGISTER_RESPONSE:
		return MsgPushTargetRegisterResponse.parse(buffer);
		break;
		
	case Constants.PUSH_TARGET_DEREGISTER_REQUEST:
		return MsgPushTargetDeregisterRequest.parse(buffer);
		break;
		
	case Constants.PUSH_TARGET_DEREGISTER_RESPONSE:
		return MsgPushTargetDeregisterResponse.parse(buffer);
		break;
		
	case Constants.CONNECTION_OPEN_REQUEST:
		return MsgConnectionOpenRequest.parse(buffer);
		break;
		
	case Constants.CONNECTION_OPEN_RESPONSE:
		return MsgConnectionOpenResponse.parse(buffer);
		break;
		
	case Constants.CONNECTION_CLOSE_REQUEST:
		return MsgConnectionCloseResponse.parse(buffer);
		break;
		
	case Constants.CONNECTION_CLOSE_RESPONSE:
		return MsgConnectionCloseResponse.parse(buffer);
		break;
		
	case Constants.NETWORK_STATUS_RESPONSE:
		return MsgNetworkStatusResponse.parse(buffer);
		break;
		
	case Constants.PROTOCOL_VERSION_RESPONSE:
		return MsgProtocolVersionResponse.parse(buffer);
		break;
		
	case Constants.DEVICE_IDENTIFIER_RESPONSE:
		return MsgDeviceIdentifierResponse.parse(buffer);
		break;
		
	case Constants.DEVICE_AUTHENTICATION_REQUEST:
		return MsgDeviceAuthenticationResponse.parse(buffer);
		break;
		
	case Constants.DEVICE_AUTHENTICATION_RESPONSE:
		return MsgDeviceAuthenticationResponse.parse(buffer);
		break;
		
	case Constants.DEVICE_TIME_RESPONSE:
		return MsgDeviceTimeResponse.parse(buffer);
		break;
		
	case Constants.DEVICE_SOFTWARE_RESPONSE:
		return MsgDeviceSoftwareResponse.parse(buffer);
		break;
		
	case Constants.IP_STATISTIC_RESPONSE:
		return MsgIPStatisticResponse.parse(buffer);
		break;
		
	case Constants.TRACEROUTE_REQUEST:
		return MsgTracerouteRequest.parse(buffer);
		break;
		
	case Constants.TRACEROUTE_RESPONSE:
		return MsgTracerouteResponse.parse(buffer);
		break;
		
	case Constants.SERVER_MODE_REQUEST:
		return MsgServerModeRequest.parse(buffer);
		break;
		
	case Constants.SERVER_MODE_RESPONSE:
		return MsgServerModeResponse.parse(buffer);
		break;
		
	case Constants.SERVER_MODE_RECONNECT_REQUEST:
		return MsgServerModeReconnectRequest.parse(buffer);
		break;
		
	case Constants.SERVER_MODE_RECONNECT_RESPONSE:
		return MsgServerModeReconnectResponse.parse(buffer);
		break;
		
	case Constants.STREAM_SOURCE_REGISTER_REQUEST:
		return MsgStreamSourceRegisterRequest.parse(buffer);
		break;
		
	case Constants.STREAM_SOURCE_REGISTER_RESPONSE:
		return MsgStreamSourceRegisterResponse.parse(buffer);
		break;
		
	case Constants.STREAM_SOURCE_DEREGISTER_REQUEST:
		return MsgStreamSourceDeregisterRequest.parse(buffer);
		break;
		
	case Constants.STREAM_SOURCE_DEREGISTER_RESPONSE:
		return MsgStreamSourceDeregisterResponse.parse(buffer);
		break;
		
	case Constants.STREAM_CHANNEL_OPEN_REQUEST:
		return MsgStreamChannelOpenRequest.parse(buffer);
		break;
		
	case Constants.STREAM_CHANNEL_OPEN_RESPONSE:
		return MsgStreamChannelOpenResponse.parse(buffer);
		break;
		
	case Constants.STREAM_CHANNEL_CLOSE_REQUEST:
		return MsgStreamChannelCloseRequest.parse(buffer);
		break;
		
	case Constants.STREAM_CHANNEL_CLOSE_RESPONSE:
		return MsgStreamChannelCloseResponse.parse(buffer);
		break;
		
	case Constants.STREAM_DATA_TRANSFER_REQUEST:
		return MsgStreamDataTransferRequest.parse(buffer);
		break;
		
	case Constants.STREAM_DATA_TRANSFER_RESPONSE:
		return MsgStreamDataTransferResponse.parse(buffer);
		break;
		
	case Constants.DATA_TRANSFER_REQUEST:
		return MsgDataTransferRequest.parse(buffer);
		break;
		
	case Constants.DATA_TRANSFER_RESPONSE:
		return MsgDataTransferResponse.parse(buffer);
		break;
		
	 default:
        return undefined;
	};
};

module.exports = IptMessage;
