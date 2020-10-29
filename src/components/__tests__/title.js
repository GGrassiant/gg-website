// Libs
import React from 'react';
import { shallow } from 'enzyme';

// Utils
import { render, getByText } from './utils/test-utils';

// Components
import Title from '../Title';
import { TitleWrapper } from '../Title/title-styles';

describe('<Title>', () => {
  describe('mounts', () => {
    test('component mounts', () => {
      const { container } = render(<Title>Coucou</Title>);

      expect(container).toBeInTheDocument();
    });
  });

  describe('props', () => {
    test('renders the children', () => {
      const { container } = render(<Title>Coucou</Title>);

      expect(getByText(container, 'Coucou')).toBeInTheDocument();
    });

    test('renders the theme prop', () => {
      const wrapper = shallow(
        <Title size="normal" weight="regular">
          Coucou
        </Title>,
      );

      expect(wrapper.find(TitleWrapper).prop('size')).toBe('normal');
      expect(wrapper.find(TitleWrapper).prop('weight')).toBe('regular');
    });
  });
});
