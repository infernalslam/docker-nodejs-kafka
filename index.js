const kafka = require('kafka-node')
const Consumer = kafka.Consumer
const client = new kafka.Client()
// const client = new kafka.KafkaClient({kafkaHost: '0.0.0.0:9092'});
const consumer = new Consumer(client, [{
  topic: 'test-kafka',
  offset: 0
}], {
  autoCommit: true
})

consumer.on('message', function (message) {
  console.log(message)
})

consumer.on('error', function (err) {
  console.log('Error:', err)
})

consumer.on('offsetOutOfRange', function (err) {
  console.log('offsetOutOfRange:', err)
})