// Libs
import styled from 'styled-components';

// Styles
import { breakPoints, theme } from '../../utils/constants';

interface ToggleThemeElementProps {
  colorMode: string | undefined;
}

export const ToggleThemeWrapper = styled.button`
  padding: 0;
  margin: 0;
  background: transparent;
  border: none;
  cursor: pointer;
`;

export const ToggleThemeElement = styled.span<ToggleThemeElementProps>`
  font-size: 2rem;
  transition: opacity ${theme.transition.default} ease-in;
  opacity: ${({ colorMode }) => (colorMode ? 1 : 0)};
`;

export const HeaderElement = styled.header`
  position: absolute;
  top: 0;
  left: 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: ${theme.layout.headerHeight};
  width: calc(100% - ${theme.layout.layoutOffset});
  max-width: ${breakPoints.xl};
  font-family: ${theme.fonts.defaultFont};
  border-bottom: ${theme.layout.headerBorder} solid var(--color-divider);

  @media (min-width: ${breakPoints.largeBreakPointLimit}) {
    left: 0;
    margin-left: calc((100vw - ${breakPoints.xl}) * 0.5);
  }

  h1 {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 0;
    width: 5rem;

    p {
      margin: 0;
      font-family: ${theme.fonts.defaultFont};
      font-size: 1rem;
      font-weight: ${theme.fontWeight.medium};
      line-height: 1rem;
      color: var(--color-reversetext);

      &:first-of-type {
        text-align: right;
      }
    }
  }

  a {
    text-decoration: none;
  }
`;

export const MenuWrapper = styled.ul`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  list-style-type: none;
  margin: 0;
  padding: 0;
  color: var(--color-reversetext);

  li {
    position: relative;
    display: flex;
    align-items: center;
    margin: 0 0.4rem 0 0;
    font-size: ${theme.fontSizes.small};
    text-transform: capitalize;

    @media (min-width: ${breakPoints.xsm}) {
      font-size: ${theme.fontSizes.normal};
      font-weight: ${theme.fontWeight.regular};
      margin: 0 1rem 0 0;
    }

    @media (min-width: ${breakPoints.md}) {
      margin: 0 2rem 0 0;
    }

    &.lang-wrapper {
      width: 1.3rem;
      margin: 0 0.5rem 0 0;
    }

    &:last-child {
      margin-right: 0;
    }
  }

  a {
    position: relative;
    text-decoration: none;
    margin: 0;
    color: var(--color-reversetext);

    &:not(.lang):before {
      content: '';
      position: absolute;
      top: 1.5rem;
      left: 0;
      width: 0;
      transition: all ${theme.transition.default} ease-in;
    }

    &.active {
      font-weight: ${theme.fontWeight.bold};

      &:before {
        content: '';
        position: absolute;
        top: 1.5rem;
        left: 0;
        width: 100%;
        border-bottom: 1px solid var(--color-reversetext);
      }
    }

    &:hover:before {
      width: 100%;
      border-bottom: 1px solid var(--color-reversetext);
    }
  }
`;
