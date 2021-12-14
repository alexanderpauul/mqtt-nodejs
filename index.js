// https://www.npmjs.com/package/mqtt
// Para que mqtt funcione hay que abrir el puerto 1883

var mqtt = require('mqtt')
var client = mqtt.connect('mqtt://test.mosquitto.org')
// var client = mqtt.connect('ws://test.mosquitto.org:8080/mqtt')

client.on('connect', function () {
    client.subscribe('#', function (err) {
        if (!err) {
            client.publish('presence', 'Hello mqtt')
        }
    })
})

// client.on('message', function (topic, message) {
client.on('message', function (topic, message) {
    // message is Buffer
    console.log(topic + ' ' + message.toString())
    //client.end()
})