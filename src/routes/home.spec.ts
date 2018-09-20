import { Request, Response } from 'express';
import home from './home';

describe('home', () => {
  it('should call response.send with Hello, World!', () => {
    const sendMock = jest.fn();
    const responseMock: any = { send: sendMock };
    home(<Request>{}, responseMock);
    expect(sendMock).toBeCalledWith('Hello, World!');
  });
});
