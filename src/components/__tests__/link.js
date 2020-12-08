// Libs
import React from 'react';

// Utils
import { render } from './utils/test-utils';

// Components
import Link from '../Link';

describe('<Link>', () => {
  describe('mounts', () => {
    test('component mounts', () => {
      const { container } = render(
        <Link href="www.lolz.com" theme="dark">
          Coucou
        </Link>,
      );

      expect(container).toBeInTheDocument();
    });
  });

  describe('props', () => {
    test('renders the children', () => {
      const { getByText } = render(
        <Link href="www.lolz.com" theme="dark">
          Coucou
        </Link>,
      );

      expect(getByText('Coucou')).toBeInTheDocument();
    });

    test('renders the link', () => {
      const { container } = render(
        <Link href="www.lolz.com" theme="dark">
          Coucou
        </Link>,
      );
      expect(container.children[0]).toHaveAttribute('href', 'www.lolz.com');
    });
  });
});
