// Libs
import styled, { keyframes } from 'styled-components';

const rotatingLoader = keyframes`
  100% {
    transform: rotate(360deg);
  }
`;

const rotatingLoaderDots = keyframes`
  80%, 100% {
    transform: rotate(360deg);
  }
`;

const rotatingLoaderDotsBefore = keyframes`
  0% {
    transform: scale(1.0);
  }

  50% {
    transform: scale(0.4);
  }

  100% {
    transform: scale(1.0);
  }
`;

export const LoaderWrapper = styled.div`
  width: 2.5rem;
  height: 2.5rem;
  position: relative;
  animation: ${rotatingLoader} 2.5s infinite linear both;
`;
LoaderWrapper.displayName = 'LoaderWrapper';

export const Loaderdot = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  animation: ${rotatingLoaderDots} 2s infinite ease-in-out both;

  &:before {
    content: '';
    display: block;
    width: 25%;
    height: 25%;
    background-color: var(--color-reversetextwithopacity);
    border-radius: 100%;
    animation: ${rotatingLoaderDotsBefore} 2s infinite ease-in-out both;
  }

  &:nth-child(1) {
    animation-delay: -1.1s;

    &:before {
      animation-delay: -1.1s;
    }
  }

  &:nth-child(2) {
    animation-delay: -1s;

    &:before {
      animation-delay: -1s;
    }
  }

  &:nth-child(3) {
    animation-delay: -0.9s;

    &:before {
      animation-delay: -0.9s;
    }
  }

  &:nth-child(4) {
    animation-delay: -0.8s;

    &:before {
      animation-delay: -0.8s;
    }
  }

  &:nth-child(5) {
    animation-delay: -0.7s;

    &:before {
      animation-delay: -0.7s;
    }
  }

  &:nth-child(6) {
    animation-delay: -0.6s;

    &:before {
      animation-delay: -0.6s;
    }
  }
`;
Loaderdot.displayName = 'Loaderdot';
