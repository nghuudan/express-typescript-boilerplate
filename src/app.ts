import express from 'express';
import bodyParser from 'body-parser';
import helmet from 'helmet';
import routes from './routes';
import { logger } from './util';

const app = express();
app.use(bodyParser.json());
app.use(helmet());
app.use(routes);
app.listen(3333, () => logger.info('Express server listening on port 3333'));

export default app;
