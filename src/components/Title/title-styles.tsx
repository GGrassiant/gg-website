// Libs
import styled from 'styled-components';
import { Property } from 'csstype';

// Styles
import * as variables from '../../utils/_variables.scss';

interface TitleWrapperProps {
  readonly size: string;
  readonly weight: string;
}

const customFontSize: { [key: string]: Property.FontSize } = {
  xxl: variables.fontSizeXxl,
  xl: variables.fontSizeXl,
  l: variables.fontSizeLarge,
  normal: variables.fontSizeNormal,
  small: variables.fontSizeSmall,
};

const customFontWeight: { [key: string]: Property.FontWeight } = {
  bold: variables.fontWeightBold,
  semibold: variables.fontWeightSemiBold,
  regular: variables.fontWeightRegular,
  light: variables.fontWeightLight,
};

export const TitleWrapper = styled.p<TitleWrapperProps>`
  font-family: ${variables.defaultTitleFont};
  font-size: ${(props) => customFontSize[props.size]};
  font-weight: ${(props) => customFontWeight[props.weight]};
`;
TitleWrapper.displayName = 'TitleWrapper';
