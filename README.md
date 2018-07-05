# Kafka set up

### คำสั่งที่ใช้เรียกดู topics ใน kafka
```
bin/kafka-topics.sh --list --zookeeper 0.0.0.0:2181

```


### คำสั่งที่ใช้สร้าง topics ใน kafka
```
bin/kafka-topics.sh --create --zookeeper 0.0.0.0:2181 --replication-factor 1 --partitions 1 --topic test-kafka
```


```
./bin/kafka-console-consumer.sh --bootstrap-server 0.0.0.0:9092 --topic test-kafka --from-beginning
```

```
./bin/kafka-console-producer.sh --broker-list 0.0.0.0:9092 --topic test-kafka

```
