import { Router } from 'express';
import errorHandler from './error-handler';
import notFound from './not-found';
import home from './home';
import todo from './todo';

const mainRouter = Router();
mainRouter.get('/', home);
mainRouter.use(todo);
mainRouter.use('/*', notFound);
mainRouter.use(errorHandler);

export default mainRouter;
