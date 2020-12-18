// Libs
import styled, { keyframes } from 'styled-components';

// Styles
import { breakPoints, theme } from '../../utils/constants';

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

const doggoSpino = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

interface ImageLoadProps {
  doggoPictureLoaded: boolean;
}

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

export const FOFImageWrapper = styled.img<ImageLoadProps>`
  display: ${({ doggoPictureLoaded }) =>
    doggoPictureLoaded ? 'flex' : 'none'};
  height: 40vmin;
  border-radius: 10%;

  @media (prefers-reduced-motion: no-preference) {
    animation: ${doggoSpino} infinite 20s linear;
  }
`;
FOFImageWrapper.displayName = 'FOFImageWrapper';

export const DoggoPictureSkeleton = styled.div<ImageLoadProps>`
  position: relative;
  display: ${({ doggoPictureLoaded }) =>
    doggoPictureLoaded ? 'none' : 'flex'};
  overflow: hidden;
  height: 40vmin;
  width: 40vmin;
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
    border-radius: 10%;
    background-color: rgba(58, 57, 57, 0.3);
  }
`;
DoggoPictureSkeleton.displayName = 'DoggoPictureSkeleton';
