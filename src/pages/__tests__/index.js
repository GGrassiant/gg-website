// Libs
import React from 'react';

// Utils
import { render, fireEvent } from '../../components/__tests__/utils/test-utils';

// Component
import IndexPage, { getRedirectLanguage } from '../index';
import Layout from '../../components/Layout/layout';

export const GatsbyImageData = {
  backgroundColor: '#f8f8f8',
  height: 900,
  images: {
    sources: [
      {
        sizes: '(min-width: 1280px) 1280px, 100vw',
        srcSet:
          '//images.ctfassets.net/77qd04dslv2l/4EAiKcsn19ocbeylIOIKX6/fb45f1b171423b667eb2260dab9170fc/localhost_3000_login_HighResScreenshot_.png?w=320&h=225&q=50&fm=webp 320w,\n//images.ctfassets.net/77qd04dslv2l/4EAiKcsn19ocbeylIOIKX6/fb45f1b171423b667eb2260dab9170fc/localhost_3000_login_HighResScreenshot_.png?w=640&h=450&q=50&fm=webp 640w,\n//images.ctfassets.net/77qd04dslv2l/4EAiKcsn19ocbeylIOIKX6/fb45f1b171423b667eb2260dab9170fc/localhost_3000_login_HighResScreenshot_.png?w=1280&h=900&q=50&fm=webp 1280w,\n//images.ctfassets.net/77qd04dslv2l/4EAiKcsn19ocbeylIOIKX6/fb45f1b171423b667eb2260dab9170fc/localhost_3000_login_HighResScreenshot_.png?w=2560&h=1800&q=50&fm=webp 2560w',
        type: 'image/webp',
      },
    ],
  },
  fallback: {
    sizes: '(min-width: 1280px) 1280px, 100vw',
    src: '//images.ctfassets.net/77qd04dslv2l/4EAiKcsn19ocbeylIOIKX6/fb45f1b171423b667eb2260dab9170fc/localhost_3000_login_HighResScreenshot_.png?w=1280&h=900&q=50&fm=png',
    srcSet:
      '//images.ctfassets.net/77qd04dslv2l/4EAiKcsn19ocbeylIOIKX6/fb45f1b171423b667eb2260dab9170fc/localhost_3000_login_HighResScreenshot_.png?w=320&h=225',
  },
  layout: 'constrained',
  width: 1280,
};

export const GatsbyImageData2 = {
  backgroundColor: '#f8f8f8',
  height: 900,
  images: {
    sources: [
      {
        sizes: '(min-width: 1280px) 1280px, 100vw',
        srcSet: 'sdfsfsdf',
        type: 'sdfsfds',
      },
    ],
  },
  fallback: {
    sizes: '(min-width: 1280px) 1280px, 100vw',
    src: '//images.ctfassets.net/77qd04dslv2l/4EAiKcsn19ocbeylIOIKX6/fb45f1b171423b667eb2260dab9170fc/localhost_3000_login_HighResScreenshot_.png?w=1280&h=900&q=50&fm=png',
    srcSet:
      '//images.ctfassets.net/77qd04dslv2l/4EAiKcsn19ocbeylIOIKX6/fb45f1b171423b667eb2260dab9170fc/localhost_3000_login_HighResScreenshot_.png?w=320&h=225',
  },
  layout: 'constrained',
  width: 1280,
};

export const GatsbyImageData3 = {
  backgroundColor: '#f8f8f8',
  height: 900,
  images: {
    sources: [
      {
        sizes: '(min-width: 1280px) 1280px, 100vw',
        srcSet: 'sdfsfsdf',
        type: 'sdfsfds',
      },
    ],
  },
  fallback: {
    sizes: '(min-width: 1280px) 1280px, 100vw',
    src: '//images.ctfassets.net/77qd04dslv2l/4EAiKcsn19ocbeylIOIKX6/fb45f1b171423b667eb2260dab9170fc/localhost_3000_login_HighResScreenshot_.png?w=1280&h=900&q=50&fm=png',
    srcSet:
      '//images.ctfassets.net/77qd04dslv2l/4EAiKcsn19ocbeylIOIKX6/fb45f1b171423b667eb2260dab9170fc/localhost_3000_login_HighResScreenshot_.png?w=320&h=225',
  },
  layout: 'constrained',
  width: 1280,
};

export const FLUID = {
  base64:
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQA…kZXNjcmlwdGlvbgBEaXNwbGF5FxuVuAAAAABJRU5ErkJggg==',
  aspectRatio: 1.124251497005988,
  src: '//images.ctfassets.net/77qd04dslv2l/10TJDRTs9naw0r…reen_Shot_2020-07-18_at_3.41.48_PM.png?w=500&q=50',
  srcSet:
    '//images.ctfassets.net/77qd04dslv2l/10TJDRTs9naw0r…-07-18_at_3.41.48_PM.png?w=1502&h=1336&q=50 1502w',
  sizes: '(max-width: 500px) 100vw, 500px',
};

export const FLUID_2 = {
  base64:
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQA…kZXNjcmlwdGlvbgBEaXNwbGF5FxuVuAAAAABJRU5ErkJggg==',
  aspectRatio: 1.124251497005988,
  src: '//images.ctfassets.net/77qd04dslv2l/10TJDRTs9naw0r…reen_Shot_2020-07-19_at_3.41.48_PM.png?w=500&q=50',
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

    test('window scroll', () => {
      global.scrollTo = jest.fn();
      const { getByTestId } = render(<IndexPage />);
      const exploreProjects = getByTestId('custom-scroll-element');
      expect(exploreProjects).toBeInTheDocument();
      fireEvent(
        exploreProjects,
        new MouseEvent('click', {
          bubbles: true,
          cancelable: true,
        }),
      );
      expect(window.scrollTo).toBeCalledWith({ behavior: 'smooth', top: 0 });
    });

    test('lang navigate default', () => {
      render(<IndexPage />);
      expect(window.location.pathname).toEqual('/');
    });

    test('undefined navigator', () => {
      // TODO: make navigator return undefined
    });

    test('lang navigate other locale', () => {
      const languageGetter = jest.spyOn(window.navigator, 'language', 'get');
      languageGetter.mockReturnValue('fr');
      render(
        <Layout locale="fr">
          <IndexPage />
        </Layout>,
      );
      expect(window.location.pathname).toEqual('/fr');
    });
  });
});
