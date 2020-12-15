// Libs
import styled, { createGlobalStyle } from 'styled-components';

// Styles
import { breakPoints, theme } from '../../utils/constants';

// Global properties
const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  html {
    height: 100%;
    font-family: ${theme.fonts.defaultFont};
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
  }

  body {
    font-family: ${theme.fonts.defaultFont};
    background: var(--color-background);
    color: var(--color-reversetext);
    height: 100%;
    margin: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    overflow-x: hidden;
  }

  #___gatsby,
  #gatsby-focus-wrapper {
    height: 100%;
  }

  p {
    margin: 0;
  }

  a {
    background-color: transparent;
    text-decoration: none;
    -webkit-text-decoration-skip: objects;
  }
  a:active,
  a:hover {
    outline-width: 0;
  }
`;

export default GlobalStyle;

// Layout components properties
export const PageWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  transition: all ${theme.transition.medium} ease;
`;

export const ContentWrapper = styled.div`
  width: calc(100% - ${theme.layout.layoutOffset});
  max-width: ${breakPoints.xl};
  margin: 0 auto;
  background-color: var(--color-background);
  height: 100%;
`;

export const MainElement = styled.main`
  height: 100%;
`;

export const FunnyFaceWrapper = styled.div`
  position: fixed;
  bottom: 3rem;
  left: 0;
  transform: translate(-100%, -5rem);
  transition: all ${theme.transition.medium} ease-in-out;
  transition-delay: ${theme.transition.default};
  width: 5rem;

  img {
    border-radius: 50%;
  }
`;
