import { Router } from 'express';

const routes = Router();

routes.post('/card', async (request, response) => {
  
  //Message for sent to microservice
  const message = {
    user: {id: 1, name: 'Erico Almeida'},
    type: 'BUY_ON_CARD',
    value: 1000 
   };

   //Notify microservice
   await request.producer.send({
     topic: 'rewards-cashback', //<- Which topic the message will be sent to;
     messages: [
       {
         value: JSON.stringify(message),
       }
     ]
   });  
  
   return response.json({ ok: true });
});

export { routes }