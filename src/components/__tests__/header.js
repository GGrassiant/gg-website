// Libs
import React from 'react';

// Utils
import { Location } from '@reach/router';
import { render, fireEvent, renderWithRouterLocation } from './utils/test-utils';

// Component
import Header, { isHome } from '../Header/header';
import * as siteMetaData from '../../utils/siteMetaData';

describe('<Header>', () => {
  describe('mounts', () => {
    test('component mounts', () => {
      const { container } = render(
        <Location>
          {(location) => <Header siteTitle="site title" location={location} locale="en" />}
        </Location>,
      );
      expect(container).toBeInTheDocument();
    });
  });

  describe('click', () => {
    test('toggle theme', () => {
      const { getByText } = render(
        <Location>
          {(location) => <Header siteTitle="site title" location={location} locale="en" />}
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
      fireEvent(
        getByText('🌞'),
        new MouseEvent('click', {
          bubbles: true,
          cancelable: true,
        }),
      );
      expect(getByText('🌝')).toBeInTheDocument();
    });

    test('language toggler fr', () => {
      const { getByText } = render(
        <Location>
          {(location) => <Header siteTitle="site title" location={location} locale="en" />}
        </Location>,
      );
      expect(getByText('fr')).toBeInTheDocument();
      expect(getByText('fr').closest('li').children[0]).toHaveAttribute('href', '/fr/');
    });

    test('language toggler en', () => {
      const { getByText } = render(
        <Location>
          {(location) => <Header siteTitle="site title" location={location} locale="fr" />}
        </Location>,
      );
      expect(getByText('en')).toBeInTheDocument();
      expect(getByText('en').closest('li').children[0]).toHaveAttribute('href', '/');
    });
  });

  describe('render menu', () => {
    test('render menu', () => {
      const { getByText } = render(
        <Location>
          {(location) => <Header siteTitle="site title" location={location} locale="en" />}
        </Location>,
      );
      siteMetaData.menu.slice(2, -1).forEach((menuItem) => {
        const projectMenuName = menuItem.label;
        const projectMenuLink = menuItem.slug;
        expect(getByText(projectMenuName)).toBeInTheDocument();
        expect(getByText(projectMenuName)).not.toHaveClass();
        expect(getByText(projectMenuName).closest('li').children[0]).toHaveAttribute(
          'href',
          projectMenuLink,
        );
      });
    });

    test('render menu in fr', () => {
      const { getByText } = renderWithRouterLocation(
        Header,
        {
          location: { pathname: '/fr/about/' },
        },
        'fr',
      );
      const aboutPage = siteMetaData.menu.find((menuItem) => menuItem.label === 'about');
      const contactPage = siteMetaData.menu.find((menuItem) => menuItem.label === 'contact');
      expect(getByText(aboutPage.label)).toHaveClass('active');
      expect(getByText(contactPage.label)).not.toHaveClass();
      siteMetaData.menu.slice(2, -1).forEach((menuItem) => {
        const projectMenuName = menuItem.label;
        const projectMenuLink = menuItem.slug;
        expect(getByText(projectMenuName)).toBeInTheDocument();
        expect(getByText(projectMenuName).closest('li').children[0]).toHaveAttribute(
          'href',
          `${projectMenuLink}`,
        );
      });
    });
  });

  describe('i18n pathname selection', () => {
    test('landing on another page than the homepage in English', () => {
      const { container, getByTestId } = renderWithRouterLocation(
        Header,
        {
          location: { pathname: '/another-route' },
        },
        'en',
      );
      expect(getByTestId('LocalizedLink').closest('a')).toHaveAttribute(
        'href',
        '/fr/another-route',
      );
      expect(container).toBeInTheDocument();
    });

    test('landing on another page than the homepage in French', () => {
      const { container, getByTestId } = renderWithRouterLocation(
        Header,
        {
          location: { pathname: '/fr/another-route' },
        },
        'fr',
      );
      expect(getByTestId('LocalizedLink').closest('a')).toHaveAttribute('href', '/another-route');
      expect(container).toBeInTheDocument();
    });
  });

  describe('utils', () => {
    test('is home helper', () => {
      expect(isHome('/')).toBe(true);
      expect(isHome('/lolz')).toBe(false);
    });
  });
});
