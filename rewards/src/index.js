import { Kafka } from 'kafkajs';

const kafka = new Kafka({
  brokers: ['localhost:9092'],
  clientId: 'rewards',
});

const topic = 'rewards-cashback'; //Topico para o consumer se conectar
const consumer = kafka.consumer({groupId: 'rewards-group'});

//Process received messages
(async () => {
  await consumer.connect();
  await consumer.subscribe({ topic });
  await consumer.run({
    eachMessage: async ({topic, partition, message}) => {
      const prefix = `${topic}[${partition} | ${message.offset}] / ${message.timestamp}`;

      //show message on log
      console.log(`- ${prefix} ${message.key}#${message.value}`);
    }
  });
})().catch(console.error);
