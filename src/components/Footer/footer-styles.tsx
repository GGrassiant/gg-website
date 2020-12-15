// Libs
import styled from 'styled-components';

// Styles
import { breakPoints, theme } from '../../utils/constants';
import {
  FunnyFaceWrapper,
  SpeechBubbleWrapper,
} from '../HenloFren/henlofren-styles';

interface FooterWrapperProps {
  cta?: boolean;
}

export const FooterWrapper = styled.div<FooterWrapperProps>`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  position: absolute;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

export const PermanentFooter = styled.div`
  position: relative;
  width: 100%;
  height: 5rem;
  background-color: rgba(164, 164, 164, 0.1);

  @media (min-width: ${breakPoints.md}) {
    height: 7rem;
  }
`;

export const PermanentFooterContent = styled.div`
  position: absolute;
  top: 0;
  left: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: calc(100% - ${theme.layout.layoutOffset});
  max-width: ${breakPoints.xl};
  height: 100%;
  padding: 1rem 0;
  font-family: Rubik, sans-serif;
  font-weight: ${theme.fontWeight.regular};
  font-size: ${theme.fontSizes.default};
  border-top: 1px solid var(--color-divider);

  @media (min-width: ${breakPoints.md}) {
    flex-direction: row;
    align-items: flex-start;
  }

  @media (min-width: ${breakPoints.lg}) {
    font-size: ${theme.fontSizes.normal};
  }

  // TODO: Why + 4px??? ¯\\_(ツ)_/¯
  @media (min-width: calc(${breakPoints.xl} + ${theme.layout
      .layoutOffset} + 4px)) {
    left: 0;
    margin-left: calc((100vw - ${breakPoints.xl}) * 0.5);
  }

  .links-wrapper {
    @media (max-width: ${breakPoints.md}) {
      display: flex;
      width: 100%;
    }
  }

  p {
    line-height: 13px;
    cursor: pointer;

    &:hover ~ ${FunnyFaceWrapper} {
      transform: translate(-4rem, -5rem) rotate(20deg);
    }

    &:hover ~ ${SpeechBubbleWrapper} {
      opacity: 1;
      transition-delay: 1s;
    }
  }

  > div:not(${FunnyFaceWrapper}) {
    display: flex;
    justify-content: space-between;
    width: 15%;

    @media (min-width: ${breakPoints.lg}) {
      width: 17%;
    }

    a {
      font-size: inherit;

      @media (hover: hover) and (pointer: fine) {
        &:hover {
          span {
            &:before {
              width: 100%;
              border-bottom: 1px solid var(--color-reversetext);
            }
          }

          svg {
            transform: translate(3px, -3px);
          }
        }
      }

      span {
        position: relative;

        &:before {
          content: '';
          position: absolute;
          top: 1.5rem;
          left: 0;
          width: 0;
          transition: all ${theme.transition.default} ease-in;
        }
      }

      svg {
        transition: all ${theme.transition.default} ease-in;
      }
    }
  }
`;
