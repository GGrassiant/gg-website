// Libs
import styled, { keyframes } from 'styled-components';

// Styles
import { breakPoints, theme } from '../../utils/constants';

export const FOFWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: calc(100% - ${theme.layout.footerHeightSm});
  padding-top: ${theme.layout.headerHeight};
  font-family: ${theme.fonts.defaultFont};

  @media (min-width: ${breakPoints.md}) {
    height: calc(100% - ${theme.layout.footerHeightMd});
  }
`;
FOFWrapper.displayName = 'FOFWrapper';

export const FOFWrapperContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
FOFWrapperContent.displayName = ' FOFWrapperContent';

export const FOFImageWrapper = styled.div`
  height: 20rem;
  max-width: 30rem;
  overflow: hidden;
  border-radius: 10%;

  img {
    object-fit: cover;
  }
`;
FOFImageWrapper.displayName = 'FOFImageWrapper';

const sweep = keyframes`
  0% {
    transform: translateX(-100%);
  }
  50% {
    transform: translateX(150%);
  }
  100% {
    transform: translateX(-100%);
  }
`;

export const DoggoPictureSkeleton = styled.div`
  position: relative;
  overflow: hidden;
  height: 20rem;
  width: 30rem;
  border-radius: 10%;

  &:after {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 50%;
    height: 100%;
    animation: ${sweep} 2s infinite;
    background-image: linear-gradient(
      to left,
      transparent,
      rgba(255, 255, 255, 0.4),
      transparent
    );
  }

  div {
    height: 100%;
    width: 100%;
    border-radius: 10%;
    background-color: rgba(58, 57, 57, 0.3);
  }
`;
DoggoPictureSkeleton.displayName = 'DoggoPictureSkeleton';
