// Libs
import React from 'react';

// Utils
import { render, fireEvent, getByText, screen } from './utils/test-utils';

// Component
import Header from '../header';

describe('<Header>', () => {
  describe('mounts', () => {
    test('component mounts', () => {
      const { container } = render(<Header />);
      expect(container).toBeInTheDocument();
    });
  });

  describe('click', () => {
    const { container } = render(<Header />);
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
