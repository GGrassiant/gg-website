// Libs
import React from 'react';

// Utils
import { render } from '../../components/__tests__/utils/test-utils';

// Component
import IndexPage, { getRedirectLanguage } from '../index';

export const FLUID = {
  base64:
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQA…kZXNjcmlwdGlvbgBEaXNwbGF5FxuVuAAAAABJRU5ErkJggg==',
  aspectRatio: 1.124251497005988,
  src:
    '//images.ctfassets.net/77qd04dslv2l/10TJDRTs9naw0r…reen_Shot_2020-07-18_at_3.41.48_PM.png?w=500&q=50',
  srcSet:
    '//images.ctfassets.net/77qd04dslv2l/10TJDRTs9naw0r…-07-18_at_3.41.48_PM.png?w=1502&h=1336&q=50 1502w',
  sizes: '(max-width: 500px) 100vw, 500px',
};

export const FLUID_2 = {
  base64:
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQA…kZXNjcmlwdGlvbgBEaXNwbGF5FxuVuAAAAABJRU5ErkJggg==',
  aspectRatio: 1.124251497005988,
  src:
    '//images.ctfassets.net/77qd04dslv2l/10TJDRTs9naw0r…reen_Shot_2020-07-19_at_3.41.48_PM.png?w=500&q=50',
  srcSet:
    '//images.ctfassets.net/77qd04dslv2l/10TJDRTs9naw0r…-07-18_at_3.41.48_PM.png?w=1502&h=1336&q=50 1502w',
  sizes: '(max-width: 500px) 100vw, 500px',
};

describe('<Index>', () => {
  describe('mounts', () => {
    test('components mounts', () => {
      const { container, getByText } = render(<IndexPage />);
      expect(container).toBeInTheDocument();
      expect(container.querySelector('h1')).toBeInTheDocument();
      expect(getByText('lolz')).toBeInTheDocument();
      expect(getByText('internet')).toBeInTheDocument();
      expect(getByText('1982')).toBeInTheDocument();
    });
  });

  describe('helpers', () => {
    test('url helpers', () => {
      expect(getRedirectLanguage()).toBe('en');
    });
  });
});
