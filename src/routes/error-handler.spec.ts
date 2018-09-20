import { Request } from 'express';
import errorHandler from './error-handler';
import logger from '../util/logger';

jest.mock('../util/logger');

describe('errorHandler', () => {
  const errorMock = new Error('');
  const sendStatusMock = jest.fn();
  const responseMock: any = { sendStatus: sendStatusMock };

  errorHandler(
    errorMock,
    <Request>{},
    responseMock,
    jest.fn(),
  );

  it('should call logger.error', () => {
    expect(logger.error).toBeCalledWith(errorMock);
  });

  it('should call response.sendStatus with 500', () => {
    expect(sendStatusMock).toBeCalledWith(500);
  });
});
