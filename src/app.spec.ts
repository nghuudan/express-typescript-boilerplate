import helmet from 'helmet';
import app from './app';
import routes from './routes';

jest.mock('helmet');
jest.mock('./services', () => ({
  getAllTodos: jest.fn(() => Promise.resolve()),
  getTodoById: jest.fn(() => Promise.resolve()),
  createTodo: jest.fn(() => Promise.resolve()),
  deleteTodo: jest.fn(() => Promise.resolve()),
  updateTodo: jest.fn(() => Promise.resolve()),
}));
jest.mock('./util');

describe('app', () => {
  it('should call listen once', () => {
    expect(app.listen).toBeCalledTimes(1);
  });

  it('should call use with helmet()', () => {
    expect(app.use).toBeCalledWith(helmet());
  });

  it('should call use with routes', () => {
    expect(app.use).toBeCalledWith(routes);
  });
});
