// Libs
import styled from 'styled-components';

// Styles
import { breakPoints, theme } from '../../utils/constants';

interface TitleWrapperProps {
  readonly weight: string;
  footer?: boolean;
}

const customFontWeight: { [key: string]: string } = {
  bold: theme.fontWeight.bold,
  semibold: theme.fontWeight.semiBold,
  regular: theme.fontWeight.regular,
  light: theme.fontWeight.light,
};

export const TitleWrapper = styled.div<TitleWrapperProps>`
  font-family: ${theme.fonts.defaultFont};
  font-weight: ${(props) => customFontWeight[props.weight]};
`;
TitleWrapper.displayName = 'TitleWrapper';

export const TitleWrapperSmall = styled(TitleWrapper)<TitleWrapperProps>`
  font-size: ${theme.fontSizes.small};
`;
TitleWrapperSmall.displayName = 'TitleWrapperSmall';

export const TitleWrapperNormal = styled(TitleWrapper)<TitleWrapperProps>`
  font-size: ${theme.fontSizes.normal};
`;
TitleWrapperNormal.displayName = 'TitleWrapperNormal';

export const TitleWrapperFooter = styled(TitleWrapper)<TitleWrapperProps>`
  font-size: ${theme.fontSizes.cta};
`;
TitleWrapperFooter.displayName = 'TitleWrapperFooter';

export const TitleWrapperMedium = styled(TitleWrapper)<TitleWrapperProps>`
  font-size: ${theme.fontSizes.bigger};

  @media (min-width: ${breakPoints.lg}) {
    font-size: ${theme.fontSizes.mediumLight};
  }
`;
TitleWrapperNormal.displayName = 'TitleWrapperMedium';

export const TitleWrapperLarge = styled(TitleWrapper)<TitleWrapperProps>`
  font-size: ${theme.fontSizes.large};
`;
TitleWrapperLarge.displayName = 'TitleWrapperLarge';

export const TitleWrapperXL = styled(TitleWrapper)<TitleWrapperProps>`
  font-size: ${theme.fontSizes.large};

  @media (min-width: ${breakPoints.md}) {
    font-size: ${theme.fontSizes.veryLarge};
  }
`;
TitleWrapperXL.displayName = 'TitleWrapperXL';

export const TitleWrapperXXL = styled(TitleWrapper)<TitleWrapperProps>`
  font-size: ${theme.fontSizes.medium};

  @media (min-width: ${breakPoints.sm}) {
    font-size: ${theme.fontSizes.large};
  }

  @media (min-width: ${breakPoints.md}) {
    font-size: ${theme.fontSizes.veryLarge};
  }

  @media (min-width: ${breakPoints.lg}) {
    font-size: ${theme.fontSizes.xl};
  }
`;
TitleWrapperXXL.displayName = 'TitleWrapperXXL';
