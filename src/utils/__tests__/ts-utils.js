// Utils
import { ensure } from '../typescript.utils';

describe('ensure', () => {
  it('ensures the data is present', () => {
    const item = ['test'];
    expect(ensure(item)).toBe(item);
    expect(() => ensure(undefined)).toThrow(TypeError);
  });
});
