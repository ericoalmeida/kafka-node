# Micro-serviço com Node.js

- Utilizando Apache Kafka
- Utilizando Node.js

## Aplicações

- API principal (Station);
- Geração de certificado;

## Fluxo

- API Principal envia uma mensagem pro serviço de geração de certificado para gerar um certificado;
- Micro-serviço devolve uma resposta (sincrona/assincrona);

**Se conseguir sincrona/assincrona:**

- Receber uma resposta de q uando o e-mail com o certificado foi enviado;


## O que sabemos?

- REST (latência);
- REDIS / RabbitMQ / **Kafka**;

### Empresas que utilizam

 - banQi, Nubank, Uber, Paypal, Netflix;