var Leap = require("leapjs");
var mqtt = require('mqtt');

module.exports = {
  LeapMqtt: require("./leap_mqtt.js"),
  MqttLeap: require("./mqtt_leap.js"),
  getClient: function(server){
    var client= mqtt.connect(server);
    return client;
  },
  getController:function(){
    var controller = new Leap.Controller();
    return controller;
  }
}