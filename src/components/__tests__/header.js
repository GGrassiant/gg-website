// Libs
import React from 'react';

// Utils
import { Location } from '@reach/router';
import { render, fireEvent, getByText } from './utils/test-utils';

// Component
import Header, { isHome } from '../Header/header';
import * as siteMetaData from '../../utils/siteMetaData';

describe('<Header>', () => {
  describe('mounts', () => {
    test('component mounts', () => {
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
    test('toggle theme', () => {
      const { container } = render(
        <Location>
          {(location) => (
            <Header siteTitle="site title" location={location} locale="en" />
          )}
        </Location>,
      );
      expect(getByText(container, '☾')).toBeInTheDocument();
      fireEvent(
        getByText(container, '☾'),
        new MouseEvent('click', {
          bubbles: true,
          cancelable: true,
        }),
      );
      expect(getByText(container, '☀')).toBeInTheDocument();
    });

    test('language toggler fr', () => {
      const { container } = render(
        <Location>
          {(location) => (
            <Header siteTitle="site title" location={location} locale="en" />
          )}
        </Location>,
      );
      expect(getByText(container, 'fr')).toBeInTheDocument();
      expect(
        getByText(container, 'fr').closest('li').children[0],
      ).toHaveAttribute('href', '/fr/');
    });

    test('language toggler en', () => {
      const { container } = render(
        <Location>
          {(location) => (
            <Header siteTitle="site title" location={location} locale="fr" />
          )}
        </Location>,
      );
      expect(getByText(container, 'en')).toBeInTheDocument();
      expect(
        getByText(container, 'en').closest('li').children[0],
      ).toHaveAttribute('href', '/');
    });

    test('render menu', () => {
      siteMetaData.menu.slice(1).forEach((menuItem, index) => {
        const projectMenuName = index + 1;
        const projectMenuLink = menuItem.slug;
        const { container } = render(
          <Location>
            {(location) => (
              <Header siteTitle="site title" location={location} locale="en" />
            )}
          </Location>,
        );
        expect(getByText(container, `${projectMenuName}`)).toBeInTheDocument();
        expect(
          getByText(container, `${projectMenuName}`).closest('li').children[0],
        ).toHaveAttribute('href', `${projectMenuLink}`);
      });
    });
  });

  describe('utils', () => {
    test('is home helper', () => {
      expect(isHome('/')).toBe(true);
      expect(isHome('/lolz')).toBe(false);
    });
  });
});
