# Micro-serviço com Node.js

- Utilizando Apache Kafka (kafkajs)
- Utilizando Node.js

## Aplicações

- API principal (Gateway);
- Rewards (Service engine);

## Fluxo

- API Principal envia uma mensagem pro serviço de geração de recompénças (Rewards engine) para processar uma recompensa gerada por um compra utilizando o cartão;
- Micro-serviço devolve uma resposta (sincrona/assincrona);

**Se conseguir sincrona/assincrona:**

- Receber uma resposta de q uando o e-mail com o certificado foi enviado;


## O que sabemos?

> Existem várias formas de se implementar a comunicação entre serviços.
> Abaixo temos algumas opções:

- REST (latência);
- REDIS / RabbitMQ / **Kafka**;

> Neste projeto de exemplo, iremos utilizar o kafka

### Empresas que utilizam

 - banQi, Nubank, Uber, Paypal, Netflix;

### Configuração

[Gateway](https://github.com/ericoalmeida/kafka-node/blob/master/gateway/README.md)
[Rewards Engine](https://github.com/ericoalmeida/kafka-node/blob/master/rewards/README.md)
