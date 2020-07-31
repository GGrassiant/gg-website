// Libs
import React from 'react';
import * as Gatsby from 'gatsby';

// Utils
// eslint-disable-next-line import/no-extraneous-dependencies
import { Location } from '@reach/router';
import { render, fireEvent, getByText, screen } from './utils/test-utils';

// Component
import Header from '../header';

describe('<Header>', () => {
  describe('mounts', () => {
    test('component mounts', () => {
      const useStaticQuery = jest.spyOn(Gatsby, 'useStaticQuery');
      useStaticQuery.mockImplementation(() => ({
        themeI18N: {
          defaultLang: 'en',
          config: {
            code: 'en',
            hrefLang: 'en-CA',
            name: 'English',
            localName: 'English',
            langDir: 'ltr',
            dateFormat: 'MM/DD/YYYY',
          },
        },
      }));
      const { container } = render(
        <Location>
          {(location) => (
            <Header siteTitle="site title" location={location} locale="en" />
          )}
        </Location>,
      );
      expect(container).toBeInTheDocument();
    });
  });

  describe('click', () => {
    test('toggle language', () => {
      const useStaticQuery = jest.spyOn(Gatsby, 'useStaticQuery');
      useStaticQuery.mockImplementation(() => ({
        themeI18N: {
          defaultLang: 'en',
          config: {
            code: 'en',
            hrefLang: 'en-CA',
            name: 'English',
            localName: 'English',
            langDir: 'ltr',
            dateFormat: 'MM/DD/YYYY',
          },
        },
      }));
      const { container } = render(
        <Location>
          {(location) => (
            <Header siteTitle="site title" location={location} locale="en" />
          )}
        </Location>,
      );
      expect(screen.getByText('Light mode ☀')).toBeInTheDocument();
      fireEvent(
        getByText(container, 'Light mode ☀'),
        new MouseEvent('click', {
          bubbles: true,
          cancelable: true,
        }),
      );
      expect(screen.getByText('Dark mode ☾')).toBeInTheDocument();
    });
  });
});
