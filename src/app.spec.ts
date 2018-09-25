import helmet from 'helmet';
import runApp from './app';
import db from './database';
import routes from './routes';
import { logger } from './util';

jest.mock('./database', () => ({
  catch: jest.fn(),
  sync: jest.fn(() => Promise.resolve()),
}));

jest.mock('./services', () => ({
  getAllTodos: jest.fn(() => Promise.resolve()),
  getTodoById: jest.fn(() => Promise.resolve()),
  createTodo: jest.fn(() => Promise.resolve()),
  deleteTodo: jest.fn(() => Promise.resolve()),
  updateTodo: jest.fn(() => Promise.resolve()),
}));

jest.mock('./util');

describe('app', () => {
  it('should call listen once', async () => {
    const app = await runApp();
    expect(app.listen).toBeCalledTimes(1);
  });

  it('should call use with helmet()', async () => {
    const app = await runApp();
    expect(app.use).toBeCalledWith(helmet());
  });

  it('should call use with routes', async () => {
    const app = await runApp();
    expect(app.use).toBeCalledWith(routes);
  });

  it('should catch and log an error', async () => {
    (<jest.Mock>db.sync).mockImplementation(() => Promise.reject('error'));
    await runApp();
    expect(logger.error).toBeCalledWith('Failed to sync database:', 'error');
  });
});
