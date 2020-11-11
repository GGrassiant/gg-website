// Libs
import styled from 'styled-components';

// Utils
import { breakPoints } from '../../utils/constants';

export const CTAWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 8rem;
  width: 8rem;
  border-radius: 4rem;
  background-color: var(--color-reversebackground);
  transition: all var(--default-transition-time) ease-in;

  @media (min-width: ${breakPoints.breakPointSm}) {
    height: 10rem;
    width: 10rem;
    border-radius: 5rem;
  }

  p {
    margin-bottom: 0;
    font-family: var(--default-content-font);
    font-weight: var(--font-weight-medium);
    font-size: var(--font-size-normal-alt);
    line-height: 26px;
    color: var(--color-text);
    text-align: center;

    @media (min-width: ${breakPoints.breakPointSm}) {
      font-size: var(--font-size-cta);
    }

    svg {
      display: block;
      margin: 0 auto;
    }
  }
`;
CTAWrapper.displayName = 'CTAWrapper';
