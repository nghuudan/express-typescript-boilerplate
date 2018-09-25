import express from 'express';
import bodyParser from 'body-parser';
import helmet from 'helmet';
import db from './database';
import routes from './routes';
import { logger } from './util';

export default async () => {
  const app = express();

  app.use(bodyParser.json());
  app.use(helmet());
  app.use(routes);

  await db.sync({ force: true }).then(() => {
    logger.info('Synced database');
    app.listen(3333, () => logger.info('Express server listening on port 3333'));
  }).catch((err: Error) => logger.error('Failed to sync database:', err));

  return app;
};
