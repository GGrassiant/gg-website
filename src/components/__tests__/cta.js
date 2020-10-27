// Libs
import React from 'react';

// Utils
import { render, getByText } from './utils/test-utils';

// Components
import CTA from '../CTA';

describe('<CTA>', () => {
  describe('mounts', () => {
    test('component mounts', () => {
      const { container } = render(
        <CTA size="large" theme="dark">
          Click Me
        </CTA>,
      );
      expect(container).toBeInTheDocument();
    });
  });

  describe('props', () => {
    test('renders the children', () => {
      const { container } = render(
        <CTA size="large" theme="dark">
          Click Me
        </CTA>,
      );
      expect(getByText(container, 'Click Me')).toBeInTheDocument();
    });

    test('renders the link', () => {
      const { container } = render(
        <CTA size="large" theme="dark" link="projects">
          Click Me
        </CTA>,
      );
      expect(getByText(container, 'Click Me').closest('a')).toHaveAttribute(
        'href',
        '/projects/',
      );
    });

    test('renders the style props', () => {
      const { container } = render(
        <CTA size="large" theme="dark">
          Click Me
        </CTA>,
      );

      console.log(container);
    });
  });
});
