// Libs
import styled from 'styled-components';

// Styles
import { breakPoints, theme } from '../../utils/constants';

export const CTAWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 8rem;
  width: 8rem;
  border-radius: 4rem;
  background-color: var(--color-reversebackground);
  transition: all ${theme.transition.default} ease-in;

  @media (min-width: ${breakPoints.sm}) {
    height: 10rem;
    width: 10rem;
    border-radius: 5rem;
  }

  p {
    margin-bottom: 0;
    font-family: ${theme.fonts.defaultFont};
    font-weight: ${theme.fontWeight.medium};
    font-size: ${theme.fontSizes.normalAlt};
    line-height: 26px;
    color: var(--color-text);
    text-align: center;

    @media (min-width: ${breakPoints.sm}) {
      font-size: ${theme.fontSizes.cta};
    }

    svg {
      display: block;
      margin: 0 auto;
    }
  }
`;
CTAWrapper.displayName = 'CTAWrapper';
