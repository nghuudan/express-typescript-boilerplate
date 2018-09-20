import { Request, Response } from 'express';
import logger from '../util/logger';

export default (err: Error, req: Request, res: Response, next: Function) => {
  logger.error(err);
  res.sendStatus(500);
};
