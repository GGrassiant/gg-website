// Libs
import React from 'react';

// Utils
import { Location } from '@reach/router';
import { render, fireEvent, getByText, screen } from './utils/test-utils';

// Component
import Header from '../Header/header';

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
    test('toggle language', () => {
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
