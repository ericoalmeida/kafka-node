import { app, producer } from './app';

(async () => {
  await producer.connect(); 

  app.listen(3333);
})().catch(console.error);
