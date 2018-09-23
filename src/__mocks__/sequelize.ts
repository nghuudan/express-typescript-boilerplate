export default jest.fn(() => ({
  authenticate: jest.fn(() => Promise.resolve()),
  import: jest.fn(),
  sync: jest.fn(() => Promise.resolve()),
}));
