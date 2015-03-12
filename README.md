# What's  leap-mqtt
======

  This is a nodejs module for grasping gesture data from LeapMotion devices,and then send these data to mqtt servers。
  
## Install
```bash
$ npm install leap-mqtt
```
  
## Useage
```js
var LM=require('leap-mqtt');
	Leap2Mqtt=LM.LeapMqtt;
var client = LM.getClient('mqtt://MQTTSERVER:PORT');
var controller = LM.getController();
	controller.connect();
Leap2Mqtt.sendgesture(client,controller);

```

```js
var LM=require('leap-mqtt');
	Mqtt_Leap=LM.MqttLeap;
var client2 = LM.getClient('mqtt://MQTTSERVER:PORT');
	client2.subscribe('LEAP');
Mqtt_Leap.getgesture(client2);

```
