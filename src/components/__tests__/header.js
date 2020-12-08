// Libs
import React from 'react';

// Utils
import { Location } from '@reach/router';
import { render, fireEvent } from './utils/test-utils';

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
      const { getByText } = render(
        <Location>
          {(location) => (
            <Header siteTitle="site title" location={location} locale="en" />
          )}
        </Location>,
      );
      expect(getByText('🌝')).toBeInTheDocument();
      fireEvent(
        getByText('🌝'),
        new MouseEvent('click', {
          bubbles: true,
          cancelable: true,
        }),
      );
      expect(getByText('🌞')).toBeInTheDocument();
    });

    test('language toggler fr', () => {
      const { getByText } = render(
        <Location>
          {(location) => (
            <Header siteTitle="site title" location={location} locale="en" />
          )}
        </Location>,
      );
      expect(getByText('fr')).toBeInTheDocument();
      expect(getByText('fr').closest('li').children[0]).toHaveAttribute(
        'href',
        '/fr/',
      );
    });

    test('language toggler en', () => {
      const { getByText } = render(
        <Location>
          {(location) => (
            <Header siteTitle="site title" location={location} locale="fr" />
          )}
        </Location>,
      );
      expect(getByText('en')).toBeInTheDocument();
      expect(getByText('en').closest('li').children[0]).toHaveAttribute(
        'href',
        '/',
      );
    });

    test('render menu', () => {
      const { getByText } = render(
        <Location>
          {(location) => (
            <Header siteTitle="site title" location={location} locale="en" />
          )}
        </Location>,
      );
      siteMetaData.menu.slice(2, -1).forEach((menuItem) => {
        const projectMenuName = menuItem.label;
        const projectMenuLink = menuItem.slug;
        expect(getByText(`${projectMenuName}`)).toBeInTheDocument();
        expect(
          getByText(`${projectMenuName}`).closest('li').children[0],
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
