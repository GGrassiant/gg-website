// Libs
import styled from 'styled-components';

// Utils
import { breakPoints } from '../../utils/constants';

interface TitleWrapperProps {
  readonly weight: string;
}

const customFontWeight: { [key: string]: string } = {
  bold: 'var(--font-weight-bold)',
  semibold: 'var(--font-weight-semi-bold)',
  regular: 'var(--font-weight-regular)',
  light: 'var(--font-weight-light)',
};

export const TitleWrapper = styled.p<TitleWrapperProps>`
  font-family: var(--default-title-font);
  font-weight: ${(props) => customFontWeight[props.weight]};
`;
TitleWrapper.displayName = 'TitleWrapper';

export const TitleWrapperSmall = styled(TitleWrapper)<TitleWrapperProps>`
  font-size: var(--font-size-small);
`;
TitleWrapperSmall.displayName = 'TitleWrapperSmall';

export const TitleWrapperNormal = styled(TitleWrapper)<TitleWrapperProps>`
  font-size: var(--font-size-normal);
`;
TitleWrapperNormal.displayName = 'TitleWrapperNormal';

export const TitleWrapperLarge = styled(TitleWrapper)<TitleWrapperProps>`
  font-size: var(--font-size-large);
`;
TitleWrapperLarge.displayName = 'TitleWrapperLarge';

export const TitleWrapperXL = styled(TitleWrapper)<TitleWrapperProps>`
  font-size: var(--font-size-xl);
`;
TitleWrapperXL.displayName = 'TitleWrapperXL';

export const TitleWrapperXXL = styled(TitleWrapper)<TitleWrapperProps>`
  font-size: var(--font-size-medium);

  @media (min-width: ${breakPoints.breakPointSm}) {
    font-size: var(--font-size-large);
  }

  @media (min-width: ${breakPoints.breakPointMd}) {
    font-size: var(--font-size-very-large);
  }

  @media (min-width: ${breakPoints.breakPointLg}) {
    font-size: var(--font-size-xl);
  }
`;
TitleWrapperXXL.displayName = 'TitleWrapperXXL';
