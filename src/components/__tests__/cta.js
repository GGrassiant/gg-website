// Libs
import React from 'react';

// Utils
import { render } from './utils/test-utils';

// Components
import CTA from '../CTA';

describe('<CTA>', () => {
  describe('mounts', () => {
    test('component mounts', () => {
      const { container } = render(<CTA size="large">Click Me</CTA>);
      expect(container).toBeInTheDocument();
    });
  });

  describe('props', () => {
    test('renders the children', () => {
      const { getByText } = render(<CTA size="large">Click Me</CTA>);
      expect(getByText('Click Me')).toBeInTheDocument();
    });

    test('renders the link', () => {
      const { getByText } = render(
        <CTA size="large" link="about">
          Click Me
        </CTA>,
      );
      expect(getByText('Click Me').closest('a')).toHaveAttribute(
        'href',
        '/about/',
      );
    });
  });
});
