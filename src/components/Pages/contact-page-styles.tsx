// This file is in the src/component
// otherwise, if placed in pages folder
// it will mess up Gatsby build

// Libs
import styled from 'styled-components';

// Styles
import { breakPoints, theme } from '../../utils/constants';

export const ContactPageWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 2fr 1fr;
  padding-top: ${theme.layout.headerHeight};
  height: 90%;
  font-family: ${theme.fonts.defaultFont};

  @media (min-width: ${breakPoints.sm}) {
    grid-template-columns: 2fr 3fr;
    grid-template-rows: auto;
  }
`;

export const IntroWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;

  > div:first-child {
    text-align: left;
  }

  > div:last-child {
    position: absolute;
    top: 130px;
    left: 50%;
    transform: translateX(-45%);
    height: 60%;

    @media (min-width: ${breakPoints.md}) {
      top: 200px;
    }

    img,
    svg {
      height: 100%;
    }

    &:after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      pointer-events: none;
      background: var(--color-armfadebackground);
      width: 100%;
      height: 3rem;
    }
  }
`;

export const ContactMeansList = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 0 0 1rem 0;
  padding: 0;
  list-style-type: none;
  width: 100%;

  @media (min-width: ${breakPoints.sm}) {
    align-items: initial;
    border-left: 1px solid var(--color-borderlight);
    border-right: 1px solid var(--color-borderlight);
  }
`;

export const ContactMeansItem = styled.li`
  display: flex;
  align-items: center;
  height: 100%;

  @media (min-width: ${breakPoints.sm}) {
    padding-left: 2rem;
    border-bottom: 1px solid var(--color-borderlight);
  }

  span {
    display: flex;
  }

  a {
    font-size: ${theme.fonts.defaultFont};
    font-weight: ${theme.fontWeight.regular};
    color: var(--color-reversetext);
    text-transform: none;
    transition: color ${theme.transition.default} ease-in;

    @media (min-width: ${breakPoints.xsm}) {
      font-size: ${theme.fontSizes.normal};
    }

    @media (min-width: ${breakPoints.sm}) {
      font-size: ${theme.fontSizes.normalAlt};
    }

    @media (min-width: ${breakPoints.md}) {
      font-size: ${theme.fontSizes.bigger};
    }

    @media (min-width: ${breakPoints.xl}) {
      font-size: ${theme.fontSizes.mediumLight};
    }

    &:hover {
      color: ${theme.fontColor.accentColor};
    }
  }

  &:first-child {
    padding-top: 0;
  }

  svg {
    &.contact-means__type {
      margin-right: 1rem;
      border-radius: 30%;
      background-color: var(--color-background);
      color: var(--color-reversetext);
      font-size: ${theme.fontSizes.bigger};

      @media (min-width: ${breakPoints.md}) {
        padding: 0.6rem;
        font-size: ${theme.fontSizes.medium};
        color: var(--color-text);
        background-color: var(--color-reversebackground);
      }
    }

    &.contact-means__arrow {
      display: none;

      @media (min-width: ${breakPoints.md}) {
        display: initial;
        margin-left: 1rem;
        padding: 0.2rem;
        border-radius: 50%;
        background-color: var(--color-background);
        color: var(--color-reversetext);
        font-size: ${theme.fontSizes.bigger};
      }
    }
  }
`;
