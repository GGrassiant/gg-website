// Libs
import React from 'react';
import { shallow } from 'enzyme';

// Utils
import { render, getByText } from './utils/test-utils';

// Components
import Title from '../Title';
import {
  TitleWrapper,
  TitleWrapperLarge,
  TitleWrapperNormal,
  TitleWrapperSmall,
  TitleWrapperXL,
  TitleWrapperXXL,
} from '../Title/title-styles';

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

    test('renders the default props', () => {
      const wrapper = shallow(
        <Title weight="regular" size="">
          Coucou
        </Title>,
      );

      expect(wrapper.find(TitleWrapperNormal).prop('weight')).toBe('regular');
    });

    test('renders the theme prop normal', () => {
      const wrapper = shallow(
        <Title size="normal" weight="regular">
          Coucou
        </Title>,
      );

      expect(wrapper.find(TitleWrapperNormal).prop('weight')).toBe('regular');
    });

    test('renders the theme prop small', () => {
      const wrapper = shallow(
        <Title size="small" weight="regular">
          Coucou
        </Title>,
      );

      expect(wrapper.find(TitleWrapperSmall).prop('weight')).toBe('regular');
    });

    test('renders the theme prop large', () => {
      const wrapper = shallow(
        <Title size="l" weight="regular">
          Coucou
        </Title>,
      );

      expect(wrapper.find(TitleWrapperLarge).prop('weight')).toBe('regular');
    });

    test('renders the theme prop xl', () => {
      const wrapper = shallow(
        <Title size="xl" weight="regular">
          Coucou
        </Title>,
      );

      expect(wrapper.find(TitleWrapperXL).prop('weight')).toBe('regular');
    });

    test('renders the theme prop xxl', () => {
      const wrapper = shallow(
        <Title size="xxl" weight="regular">
          Coucou
        </Title>,
      );

      expect(wrapper.find(TitleWrapperXXL).prop('weight')).toBe('regular');
    });

    test('renders the theme no size prop', () => {
      const wrapper = shallow(<Title weight="regular">Coucou</Title>);

      expect(wrapper.find(TitleWrapperNormal).prop('weight')).toBe('regular');
    });

    test('renders the standard prop', () => {
      const wrapper = shallow(<Title weight="regular">Coucou</Title>);

      expect(wrapper.find(TitleWrapper)).not.toBeNull();
    });
  });
});
