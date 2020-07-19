import app from '../src/app';

describe('App', () => {
  it('Should be callable', () => {
    expect(app).toBeInstanceOf(Function);
  });
});
