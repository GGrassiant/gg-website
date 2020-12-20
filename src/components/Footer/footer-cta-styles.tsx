// Libs
import styled from 'styled-components';

// Styles
import { breakPoints, theme } from '../../utils/constants';
import { ProjectCardWrapper } from '../ProjectCard/project-card-styles';
import { TitleWrapper } from '../Title/title-styles';

export const FooterCtaWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-color: var(--color-background);

  @media screen and (max-height: ${breakPoints.sm}) and (orientation: landscape) {
    ${ProjectCardWrapper} {
      height: 8rem;

      ${TitleWrapper} {
        margin-bottom: 0.1rem !important;
      }
    }
  }

  &:before {
    content: '';
    width: 125%;
    height: 200%;
    position: absolute;
    bottom: 0;
    transform: translateY(50%);
    border-radius: 50%;
    background-color: rgba(164, 164, 164, 0.1);
  }

  a {
    z-index: 10;
  }

  > div:first-child {
    margin-bottom: 2rem;
    margin-top: 4rem;

    @media (max-width: ${breakPoints.md}) {
      font-size: ${theme.fontSizes.bigger};
      text-align: center;
    }

    @media screen and (max-height: ${breakPoints.sm}) and (orientation: landscape) {
      margin-bottom: 0.5rem;
    }
  }
`;
