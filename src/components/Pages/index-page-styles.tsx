// This file is in the src/component
// otherwise, if placed in pages folder
// it will mess up Gatsby build

// Libs
import styled from 'styled-components';

// Styles
import { breakPoints, theme } from '../../utils/constants';

export const HomePageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  width: 100%;

  @media (max-width: ${breakPoints.md}) {
    padding-top: ${theme.layout.headerHeight};
  }

  @media screen and (orientation: landscape) {
    height: initial;
  }
`;

export const TitleWrapper = styled.div`
  flex: 8.5;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (min-width: ${breakPoints.md}) {
    align-items: flex-start;
  }

  @media screen and (orientation: landscape) {
    padding-top: 1rem;
  }

  p {
    text-align: center;
  }
  // Title with the offset on desktop
  > div:first-child {
    @media (min-width: ${breakPoints.md}) {
      text-align: left;
      margin-left: ${theme.layout.titleOffset};
    }
  }

  // Title that wraps the CTA
  > div:last-child {
    position: relative;

    // CTA
    > div {
      cursor: pointer;
      margin: 1rem auto;

      @media (min-width: ${breakPoints.md}) {
        position: absolute;
        right: -11rem;
        top: 5rem;
        margin: 0;
      }

      // offset the p according to the svg to center
      // vertically on last line of the p
      p {
        margin-top: 0.6rem;

        svg {
          margin-top: 0.6rem;
        }
      }
    }
  }
`;

export const HomeProjectsWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  padding: 1rem 0;
  grid-row-gap: 1.25rem;

  @media (min-width: ${breakPoints.sm}) and (min-height: ${breakPoints.SmallHeight}) {
    grid-row-gap: 3rem;
  }

  @media (min-width: ${breakPoints.md}) {
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 1rem;
    grid-row-gap: initial;
    width: 80%;
    margin: 0 auto;
  }

  > a:nth-child(even) {
    @media (min-width: ${breakPoints.md}) {
      margin-top: 15%;
    }
  }

  a {
    height: fit-content;
  }
`;
