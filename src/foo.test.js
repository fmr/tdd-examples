import foo from './foo';

describe('foo', () => {
  it('can call', () => {
    expect(foo('bar')).toBeTruthy();
  });

  it('should return the argument passed in', () => {
    expect(foo('bar')).toEqual('bar');
  });
});
