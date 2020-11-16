// Libs
import styled from 'styled-components';

// Utils
import { breakPoints } from '../../utils/constants';

export const ProjectCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 20rem;
  width: 100%;
  padding: 0 2.5rem;
  border-radius: 11px;
  background-color: #ececec;
  box-shadow: 0 0 64px rgba(0, 0, 0, 0.07);
  font-family: Rubik, sans-serif;
  color: var(--project-text-color);
  overflow: hidden;

  @media (min-width: ${breakPoints.breakPointLg}) {
    height: 36rem;
  }

  > div:nth-child(2) {
    flex: 2;
    display: flex;
    width: 75%;
    margin-top: 2rem;
    margin-bottom: -2rem;
  }

  > div:nth-child(3) {
    flex: 2;
    overflow: hidden;

    @media (min-width: ${breakPoints.breakPointLg}) {
      flex: 2.5;
    }
  }

  .gatsby-image-wrapper {
    border-radius: 10px 10px 0 0;
  }
`;

export const ProjectCardHeader = styled.div`
  flex: 0.7;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: var(--font-size-normal-alt);
  border-bottom: 1px solid black;

  span {
    margin-top: 1.2rem;
  }
`;
