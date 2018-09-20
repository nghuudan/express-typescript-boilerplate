import { Request } from 'express';
import notFound from './not-found';

describe('notFound', () => {
  const sendStatusMock = jest.fn();
  const responseMock: any = { sendStatus: sendStatusMock };

  notFound(<Request>{}, responseMock);

  it('should call response.sendStatus with 404', () => {
    expect(sendStatusMock).toBeCalledWith(404);
  });
});
