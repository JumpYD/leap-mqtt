exports.sendgesture = function (client,controller,channel) {
    var pretimestamp = null,
        pregesture = null;
    controller.on("frame", function (frame) {
        if (frame.data.gestures != undefined && frame.data.gestures.length > 0) {
            for (var i = 0; i < frame.data.gestures.length; i++) {
                //console.log(frame.data.gestures);
                for (dev in frame.controller.devices) {
                    if (pretimestamp == null && pregesture == null) {
                        pretimestamp = frame.timestamp;
                        pregesture = frame.data.gestures[i].type;
                        client.publish(channel, '00||' + '{"name":"' + dev + '","dev":"leap","time":"' + frame.timestamp + '","type":"gesture","gesture":{"name":"' + frame.data.gestures[i].type + '","edge":"' + frame.data.gestures[i].state + '"}}');
                        //console.log('00||' + '{"name":"' + dev + '","dev":"leap","time":"' + frame.timestamp + '","type":"gesture","gesture":{"name":"' + frame.data.gestures[i].type + '","edge":"' + frame.data.gestures[i].state + '"}}');
                    } else if (pregesture !== frame.data.gestures[i].type || parseFloat(frame.timestamp) - parseFloat(pretimestamp) > 1000000 || frame.data.gestures[i].state == 'stop') {
                        client.publish(channel, '00||' + '{"name":"' + dev + '","dev":"leap","time":"' + frame.timestamp + '","type":"gesture","gesture":{"name":"' + frame.data.gestures[i].type + '","edge":"' + frame.data.gestures[i].state + '"}}');
                        //console.log('00||' + '{"name":"' + dev + '","dev":"leap","time":"' + frame.timestamp + '","type":"gesture","gesture":{"name":"' + frame.data.gestures[i].type + '","edge":"' + frame.data.gestures[i].state + '"}}');
                        pretimestamp = frame.timestamp;
                        pregesture = frame.data.gestures[i].type;
                    } else {
                        pretimestamp = frame.timestamp;
                        pregesture = frame.data.gestures[i].type;
                    }

                }
            }
        }
    });
    controller.on('streamingStarted', function () {
        client.publish(channel, '01||' + 'streamingStarted');
        //console.log("streamingStarted");
    });
    controller.on('streamingStopped', function () {
        client.publish(channel, '02||' + 'streamingStopped');
        //console.log("streamingStopped");
    });
}
