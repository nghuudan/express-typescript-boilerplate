import helmet from 'helmet';
import app from './app';
import routes from './routes';

jest.mock('helmet');
jest.mock('./util/logger');

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
