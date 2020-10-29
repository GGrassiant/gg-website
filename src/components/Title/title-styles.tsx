// Libs
import styled from 'styled-components';
import { Property } from 'csstype';

// Styles
import * as variables from '../../utils/_variables.scss';

interface TitleWrapperProps {
  readonly weight: string;
}

const customFontWeight: { [key: string]: Property.FontWeight } = {
  bold: variables.fontWeightBold,
  semibold: variables.fontWeightSemiBold,
  regular: variables.fontWeightRegular,
  light: variables.fontWeightLight,
};

export const TitleWrapper = styled.p<TitleWrapperProps>`
  font-family: ${variables.defaultTitleFont};
  font-weight: ${(props) => customFontWeight[props.weight]};
`;
TitleWrapper.displayName = 'TitleWrapper';

export const TitleWrapperSmall = styled(TitleWrapper)<TitleWrapperProps>`
  font-family: ${variables.defaultTitleFont};
  font-weight: ${(props) => customFontWeight[props.weight]};
  font-size: ${variables.fontSizesmall};
`;
TitleWrapperSmall.displayName = 'TitleWrapperSmall';

export const TitleWrapperNormal = styled(TitleWrapper)<TitleWrapperProps>`
  font-family: ${variables.defaultTitleFont};
  font-weight: ${(props) => customFontWeight[props.weight]};
  font-size: ${variables.fontSizeNormal};
`;
TitleWrapperNormal.displayName = 'TitleWrapperNormal';

export const TitleWrapperLarge = styled(TitleWrapper)<TitleWrapperProps>`
  font-family: ${variables.defaultTitleFont};
  font-weight: ${(props) => customFontWeight[props.weight]};
  font-size: ${variables.fontSizeLarge};
`;
TitleWrapperLarge.displayName = 'TitleWrapperLarge';

export const TitleWrapperXL = styled(TitleWrapper)<TitleWrapperProps>`
  font-family: ${variables.defaultTitleFont};
  font-weight: ${(props) => customFontWeight[props.weight]};
  font-size: ${variables.fontSizeXl};
`;
TitleWrapperXL.displayName = 'TitleWrapperXL';

export const TitleWrapperXXL = styled(TitleWrapper)<TitleWrapperProps>`
  font-family: ${variables.defaultTitleFont};
  font-weight: ${(props) => customFontWeight[props.weight]};
  font-size: ${variables.fontSizeXl};

  @media (min-width: ${variables.breakPointLg}) {
    font-size: ${variables.fontSizeXxl};
  }
`;
TitleWrapperXXL.displayName = 'TitleWrapperXXL';
