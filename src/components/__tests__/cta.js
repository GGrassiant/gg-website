// Libs
import React from 'react';
import { shallow } from 'enzyme';

// Utils
import { render, getByText } from './utils/test-utils';

// Components
import CTA from '../CTA';
import { CTAWrapper } from '../CTA/cta-styles';

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

    test('renders the theme props', () => {
      const wrapper = shallow(
        <CTA size="large" theme="dark" link="projects">
          Click Me
        </CTA>,
      );

      expect(wrapper.find(CTAWrapper).prop('theme')).toBe('dark');
      expect(wrapper.find(CTAWrapper).prop('size')).toBe('large');
    });
  });
});
