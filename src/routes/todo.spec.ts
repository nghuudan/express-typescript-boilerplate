import todoRouter from './todo';
import { logger } from '../util';

jest.mock('../util');
jest.mock('../services', () => ({
  getAllTodos: jest.fn(() => Promise.reject('error')),
  getTodoById: jest.fn(() => Promise.reject('error')),
  createTodo: jest.fn(() => Promise.reject('error')),
  deleteTodo: jest.fn(() => Promise.reject('error')),
  updateTodo: jest.fn(() => Promise.reject('error')),
}));

describe('todoRouter', () => {
  it('should catch and log an error', () => {
    const requestMock = {};
    const responseMock = { sendStatus: jest.fn() };
    (<jest.Mock>todoRouter.get).mock.calls[0][1](requestMock, responseMock);
    expect(logger.error).toBeCalledWith('Failed to get all todos:', 'error');
  });
});
