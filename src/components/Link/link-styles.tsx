// Libs
import styled from 'styled-components';
import { Property } from 'csstype';

// Styles
import * as variables from '../../utils/_variables.scss';

interface LinkProps {
  theme: string;
}

const customColor: { [key: string]: Property.Color } = {
  dark: variables.colorMainLight,
  light: variables.colorMainDark,
};

export const LinkWrapper = styled.a<LinkProps>`
  //font-family: ${variables.defaultContentFont};
  font-weight: ${variables.fontWeightRegular};
  //font-size: ${variables.fontSizeDefault};
  font-size: 30px;
  line-height: 13px;
  color: ${(props) => customColor[props.theme]};
  text-transform: capitalize;
  text-decoration: none;
  transition: all ${variables.defaultTransitionTime} ease-in;

  svg {
    margin-left: 8px;
  }
`;
LinkWrapper.displayName = 'LinkWrapper';
