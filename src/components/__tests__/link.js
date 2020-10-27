// Libs
import React from 'react';
import { shallow } from 'enzyme';

// Utils
import { render, getByText } from './utils/test-utils';

// Components
import Link from '../Link';
import { LinkWrapper } from '../Link/link-styles';

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
      const { container } = render(
        <Link href="www.lolz.com" theme="dark">
          Coucou
        </Link>,
      );

      expect(getByText(container, 'Coucou')).toBeInTheDocument();
    });

    test('renders the link', () => {
      const { container } = render(
        <Link href="www.lolz.com" theme="dark">
          Coucou
        </Link>,
      );
      expect(container.children[0]).toHaveAttribute('href', 'www.lolz.com');
    });

    test('renders the theme prop', () => {
      const wrapper = shallow(
        <Link href="www.lolz.com" theme="dark">
          Coucou
        </Link>,
      );

      expect(wrapper.find(LinkWrapper).prop('theme')).toBe('dark');
    });
  });
});
