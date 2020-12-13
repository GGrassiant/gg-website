// Libs
import styled from 'styled-components';
import { LocalizedLink } from 'gatsby-theme-i18n';

// Styles
import { breakPoints, theme } from '../../utils/constants';

interface ProjectCardWrapperProps {
  id?: string;
  footer?: boolean;
}

export const ProjectCardWrapper = styled.div<ProjectCardWrapperProps>`
  display: flex;
  flex-direction: column;
  height: 16rem;
  width: 100%;
  padding: 0 2.5rem;
  border-radius: 11px;
  background-color: #ececec;
  box-shadow: 0 0 64px rgba(0, 0, 0, 0.07);
  font-family: Rubik, sans-serif;
  color: ${theme.fontColor.projectTextColor};
  overflow: hidden;
  border: ${(props) =>
    props.footer ? '1px solid var(--color-reversetextwithopacity)' : ''};

  @media (min-width: ${breakPoints.xsm}) {
    height: 20rem;
  }

  @media (min-width: ${breakPoints.sm}) {
    height: ${(props) => (props.footer ? '18rem' : '30rem')};
    width: ${(props) => (props.footer ? '25rem' : 'auto')};
  }

  @media (min-width: ${breakPoints.md}) and (min-height: ${breakPoints.largeHeight}) {
    height: 25rem;
  }

  > div:nth-child(2) {
    flex: 2;
    display: flex;
    margin-top: 1rem;
    margin-bottom: -1rem;

    @media (min-width: ${breakPoints.sm}) {
      width: 75%;
      margin-top: 1rem;
      margin-bottom: -2rem;
    }
  }

  > div:nth-child(3) {
    flex: 2;
    display: flex;
    overflow: hidden;

    @media (min-width: ${breakPoints.sm}) {
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
  font-size: ${theme.fontSizes.default};
  border-bottom: 1px solid black;

  span {
    margin-top: 1.2rem;

    @media (min-width: ${breakPoints.sm}) {
      font-size: ${theme.fontSizes.normalAlt};
    }
  }
`;

export const SimplifiedCardLink = styled(LocalizedLink)`
    @media (max-width: ${breakPoints.sm}) {
      width: 80%;
    }
  }
`;
