import express from 'express';
import { Kafka } from 'kafkajs';
import { routes } from './routes';

const app = express();

/**
 * Faz conexão com o Kafka
 */
const kafka = new Kafka({
  clientId: 'gateway',     //Identifier
  brokers: ['localhost:9092'],  //Instances os kafka
  retry: {
    initialRetryTime: 100,
    retries: 8
  }
});

const producer = kafka.producer();

/**
 * Disponibiliza o producer em todas as rotas
 */
app.use((request, response, next) => {
  request.producer = producer;  
  
  return next();
});

/**
 * Cadastra as rotas da aplicação
 */
app.use( routes );

export { app, producer }
