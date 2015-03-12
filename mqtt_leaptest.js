var mqtt=require('mqtt');
var client  = mqtt.connect('mqtt://MQTTSERVER:PORT');
client.subscribe('LEAP');
client.on('message',function(topic,data){
	var json=data.toString().split('|');
	if(json[0]=='00'){
		console.log(JSON.parse(json[2]));
	}else if(json[0]=='01'){
		console.log('streamingStarted');
	}else if(json[0]=='02'){
		console.log('streamingStopped');
	}
})