// Libs
import styled from 'styled-components';
import { Property } from 'csstype';

// Styles
import * as variables from '../../utils/_variables.scss';

interface CTAWrapperProps {
  readonly size: string;
  readonly theme: string;
}

const customSize: { [key: string]: Property.Height } = {
  large: '200px',
  medium: '175px',
  small: '100px',
};

// Make sure these values are half of the ones above
// for the same value/pair
const customRadius: { [key: string]: Property.BorderRadius } = {
  large: '100px',
  medium: '87.5px',
  small: '50px',
};

const customBackgroundColor: { [key: string]: Property.BackgroundColor } = {
  dark: variables.colorMainLight,
  light: variables.colorMainDark,
};

const customColor: { [key: string]: Property.BackgroundColor } = {
  dark: variables.colorMainDark,
  light: variables.colorMainLight,
};

export const CTAWrapper = styled.div<CTAWrapperProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  height: ${(props) => customSize[props.size]};
  width: ${(props) => customSize[props.size]};
  border-radius: ${(props) => customRadius[props.size]};
  background-color: ${(props) => customBackgroundColor[props.theme]};
  transition: all ${variables.defaultTransitionTime} ease-in;

  p {
    margin-bottom: 0;
    font-family: ${variables.defaultTitleFont};
    font-weight: ${variables.fontWeightMedium};
    font-size: ${variables.fontSizeMedium};
    line-height: 26px;
    color: ${(props) => customColor[props.theme]};
    text-align: center;

    svg {
      display: block;
      margin: 0 auto;
    }
  }
`;
CTAWrapper.displayName = 'CTAWrapper';
