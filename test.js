var LM=require('./index.js');
	Mqtt_Leap=LM.MqttLeap;
	Leap2Mqtt=LM.LeapMqtt;

var client = LM.getClient('mqtt://voyager.orientsoft.cn:11883');
var client2 = LM.getClient('mqtt://voyager.orientsoft.cn:11883');
	client2.subscribe('LEAP');
var controller = LM.getController();
	controller.connect();

Leap2Mqtt.sendgesture(client,controller);

Mqtt_Leap.getgesture(client2);