const requestHandler = (path: string, func: Function) => func({ params: {} }, {
  json: jest.fn(),
  send: jest.fn(),
  sendStatus: jest.fn(),
});

const express = jest.fn(() => ({
  delete: jest.fn(requestHandler),
  get: jest.fn(requestHandler),
  post: jest.fn(requestHandler),
  put: jest.fn(requestHandler),
  listen: jest.fn((port: number, callback: Function) => callback()),
  use: jest.fn(),
}));

export const Router = jest.fn(() => ({
  delete: jest.fn(requestHandler),
  get: jest.fn(requestHandler),
  post: jest.fn(requestHandler),
  put: jest.fn(requestHandler),
  use: jest.fn(),
}));

export default express;
