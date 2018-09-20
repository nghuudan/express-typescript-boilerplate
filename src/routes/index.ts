import { Router } from 'express';
import errorHandler from './error-handler';
import notFound from './not-found';
import home from './home';

const router = Router();
router.get('/', home);
router.use('/*', notFound);
router.use(errorHandler);

export default router;
