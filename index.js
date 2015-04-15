var Leap = require("leapjs");
var mqtt = require('mqtt');

module.exports = {
  LeapMqtt: require("./leap_mqtt.js"),
  getClient: function(server,option){
  	if(option!=undefined){
    	var client= mqtt.connect(server,option);
    		client.on('connect',function(err,data){console.log('hello')})
    	return client;
	}else{
		var client= mqtt.connect(server);
		return client;
	}
  },
  getController:function(){
    var controller = new Leap.Controller();
    return controller;
  }
}