# What's  leap-mqtt
======

  This is a nodejs module for grasping gesture data from LeapMotion devices,and then send these data to mqtt servers。
  
## Install
```bash
$ npm install leap-mqtt
```
  
## Useage
```js
Leap = require("leapjs");
var mqtt  = require('mqtt');
var client  = mqtt.connect('mqtt://MQTTSERVER:PORT');
var controller = new Leap.Controller()

controller.connect();
controller.on("frame", function(frame) {
  client.publish('LEAP','00||'+frame);
}

```
