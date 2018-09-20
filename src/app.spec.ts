import app from './app';
import routes from './routes';

jest.mock('./util/logger');

describe('app', () => {
  it('should call listen once', () => {
    expect(app.listen).toBeCalledTimes(1);
  });

  it('should call use with routes', () => {
    expect(app.use).toBeCalledWith(routes);
  });
});
