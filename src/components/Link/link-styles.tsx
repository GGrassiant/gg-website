// Libs
import styled from 'styled-components';

// Utils
import { breakPoints } from '../../utils/constants';

export const LinkWrapper = styled.a`
  font-family: var(--default-content-font);
  font-weight: var(--font-weight-regular);
  font-size: var(--font-size-default);
  line-height: 13px;
  color: var(--color-reversetext);
  text-transform: capitalize;
  text-decoration: none;
  transition: all var(--default-transition-time) ease-in;

  @media (min-width: ${breakPoints.breakPointXsm}) {
    font-size: var(--font-size-normal-alt);
  }

  @media (min-width: ${breakPoints.breakPointSm}) {
    font-size: var(--font-size-bigger);
  }

  @media (min-width: ${breakPoints.breakPointMd}) {
    font-size: var(--font-size-normal);
  }

  svg {
    margin-left: 8px;
  }
`;
LinkWrapper.displayName = 'LinkWrapper';
