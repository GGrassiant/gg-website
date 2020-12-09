// Libs
import styled from 'styled-components';

// Styles
import { breakPoints, theme } from '../../utils/constants';

export const LinkWrapper = styled.a`
  font-family: ${theme.fonts.defaultFont};
  font-weight: ${theme.fontWeight.regular};
  font-size: ${theme.fontSizes.default};
  color: var(--color-reversetext);
  text-transform: capitalize;
  text-decoration: none;
  transition: all ${theme.transition.default} ease-in;

  @media (min-width: ${breakPoints.xsm}) {
    font-size: ${theme.fontSizes.normalAlt};
  }

  @media (min-width: ${breakPoints.sm}) {
    font-size: ${theme.fontSizes.bigger};
  }

  @media (min-width: ${breakPoints.md}) {
    font-size: ${theme.fontSizes.normal};
  }

  svg {
    margin-left: 8px;
  }
`;
LinkWrapper.displayName = 'LinkWrapper';
