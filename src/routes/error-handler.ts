import { Request, Response } from 'express';
import logger from '../util/logger';

export default (err: Error, _req: Request, res: Response, _next: Function) => {
  logger.error(err);
  res.sendStatus(500);
};
