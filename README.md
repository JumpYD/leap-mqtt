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
var option={
  username:'username',
  password:'password'
}
var client = LM.getClient('mqtt://MQTTSERVER:PORT',option);
var controller = LM.getController();
    controller.connect();
client.on('connect',function(err,data){
    Leap2Mqtt.sendgesture(client,controller,'LEAP');
})

```

```js
var LM=require('leap-mqtt');
var option={
  username:'username',
  password:'password'
}
var client2 = LM.getClient('mqtt://MQTTSERVER:PORT',option);
client2.on('connect',function(err,data){
    client2.subscribe('LEAP');
});
client2.on('message', function (topic, data) {
        console.log(data.toString());
})
```