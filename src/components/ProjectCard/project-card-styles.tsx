// Libs
import styled from 'styled-components';

// Utils
import { breakPoints } from '../../utils/constants';

export const ProjectCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 16rem;
  width: 100%;
  padding: 0 2.5rem;
  border-radius: 11px;
  background-color: #ececec;
  box-shadow: 0 0 64px rgba(0, 0, 0, 0.07);
  font-family: Rubik, sans-serif;
  color: var(--project-text-color);
  overflow: hidden;

  @media (min-width: ${breakPoints.breakPointXsm}) {
    height: 20rem;
  }

  @media (min-width: ${breakPoints.breakPointSm}) {
    height: 30rem;
  }

  @media (min-width: ${breakPoints.breakPointMd}) and (min-height: ${breakPoints.largeHeight}) {
    height: 25rem;
  }

  > div:nth-child(2) {
    flex: 2;
    display: flex;
    margin-top: 1rem;
    margin-bottom: -1rem;

    @media (min-width: ${breakPoints.breakPointSm}) {
      width: 75%;
      margin-top: 1rem;
      margin-bottom: -2rem;
    }
  }

  > div:nth-child(3) {
    flex: 2;
    display: flex;
    overflow: hidden;

    @media (min-width: ${breakPoints.breakPointSm}) {
      flex: 3;
    }
  }

  .gatsby-image-wrapper {
    width: 100%;
    height: 100%;
    align-self: flex-end;
    border-radius: 10px 10px 0 0;
  }
`;

export const ProjectCardHeader = styled.div`
  flex: 0.7;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: var(--font-size-default);
  border-bottom: 1px solid black;

  span {
    margin-top: 1.2rem;

    @media (min-width: ${breakPoints.breakPointSm}) {
      font-size: var(--font-size-normal-alt);
    }
  }
`;
