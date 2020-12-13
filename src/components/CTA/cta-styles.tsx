// Libs
import styled, { css, keyframes } from 'styled-components';

// Styles
import { breakPoints, theme } from '../../utils/constants';

interface CTAWrapperProps {
  animate?: boolean;
  animationDirection?: 'x' | 'y';
}

const arrowAnimationX = keyframes`
  0% {
    transform: translateX(0);
  }
  50% {
    transform: translateX(15%);
  }
  100% {
    transform: translateX(0);
  }
`;

const arrowAnimationY = keyframes`
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(15%);
  }
  100% {
    transform: translateY(0);
  }
`;

export const CTAWrapper = styled.div<CTAWrapperProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 8rem;
  width: 8rem;
  border-radius: 4rem;
  background-color: var(--color-reversebackground);
  transition: all ${theme.transition.default} ease-in;
  cursor: pointer;

  &:hover {
    transform: ${({ animate }) => (animate ? 'scale(1.2)' : '')};

    svg {
      animation: ${({ animate, animationDirection }) =>
        animate && animationDirection
          ? css`
              ${theme.transition.medium} ${animationDirection === 'x'
                ? arrowAnimationX
                : arrowAnimationY} ease-in-out
            `
          : ''};
    }
  }

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
