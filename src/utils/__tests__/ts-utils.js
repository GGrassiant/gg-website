// Utils
import { ensure } from '../typescript.utils';
import { fetcher } from '../fetcher';

describe('ensure', () => {
  test('ensures the data is present', () => {
    const item = ['test'];
    expect(ensure(item)).toBe(item);
    expect(() => ensure(undefined)).toThrow(TypeError);
  });
});

describe('fetcher', () => {
  const response = {
    status: 400,
  };
  beforeEach(() => {
    fetch.mockImplementationOnce(() => {
      return Promise.resolve(response);
    });
  });
  test('throws an error', () => {
    expect(() => fetcher('firemen-in-action')).rejects.toThrow();
  });
});
