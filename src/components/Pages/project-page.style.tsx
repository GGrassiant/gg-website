// Libs
import { LocalizedLink } from 'gatsby-theme-i18n';
import styled, { css } from 'styled-components';

// Styles
import { breakPoints, theme } from '../../utils/constants';

// Commons
const verticalPadding = '2.5rem';
const horizontalPadding = '3.5rem';

const borderElementMixin = css`
  display: block;
  position: absolute;
  content: '';
  top: ${verticalPadding};
  border-top: 1px solid var(--color-divider);
`;

const projectSectionLayoutMixin = css`
  position: relative;
  padding-bottom: 1rem;

  @media (min-width: ${breakPoints.sm}) {
    padding: ${verticalPadding} ${horizontalPadding};
  }

  @media screen and (max-height: ${breakPoints.sm}) and (orientation: landscape) {
    padding: 0;
  }

  &:before {
    display: none;

    @media (min-width: ${breakPoints.sm}) {
      ${() => borderElementMixin}
      width: calc(100% - 3.5rem * 2);
    }

    @media screen and (max-height: ${breakPoints.sm}) and (orientation: landscape) {
      ${() => borderElementMixin}
      width: 100%;
    }
  }
`;

const secondaryImageMixin = css`
  img {
    border: 1px solid var(--color-reversetextwithopacity);
    border-radius: 20px;
  }
`;

interface ProjectImages {
  manyImages: boolean;
}

// Elements
export const ProjectPageWrapper = styled.div`
  padding-top: ${theme.layout.headerHeight};
`;

export const BackButton = styled(LocalizedLink)`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 7.5rem;
  font-size: ${theme.fontSizes.normalAlt};
  font-weight: 500;
  color: var(--color-reversetext);

  &:hover {
    span {
      &:before {
        width: 100%;
        border-bottom: 1px solid var(--color-reversetext);
      }
    }

    svg {
      transform: translateX(-15%);
    }
  }

  span {
    position: relative;

    &:before {
      content: '';
      position: absolute;
      top: 1.5rem;
      left: 0;
      width: 0;
      transition: all ${theme.transition.default} ease-in;
    }
  }

  svg {
    transition: all ${theme.transition.default} ease-in;
  }
`;

export const ProjectInfoWrapper = styled.div`
  position: relative;
  padding-top: ${verticalPadding};

  h2 {
    margin: 2rem 0;
    font-size: ${theme.fontSizes.mediumLight};
    font-weight: 300;

    @media (min-width: ${breakPoints.sm}) {
      padding-bottom: ${verticalPadding};
      font-size: ${theme.fontSizes.large};
    }

    @media (min-width: ${breakPoints.md}) {
      max-width: 12ch;
      height: 210px;
    }
`;

export const ProjectInfoList = styled.ul`
  list-style-type: none;
  padding: 0;
  width: 100%;

  @media (min-width: ${breakPoints.md}) {
    width: 50%;
  }
`;

export const ProjectInfoItem = styled.li`
  display: flex;
  align-items: center;
  padding: 1.5rem 0;
  border-bottom: 1px solid var(--color-borderlight);
  font-size: ${theme.fontSizes.normalAlt};
  font-weight: ${theme.fontWeight.regular};

  &:first-child {
    padding-top: 0;
  }

  &:last-of-type {
    @media (max-width: ${breakPoints.lg}) {
      border-bottom: none;
    }
  }

  svg {
    background-color: var(--color-reversebackground);
    margin-right: 1rem;
    padding: 0.2rem;
    border-radius: 50%;
    font-size: ${theme.fontSizes.bigger};
    color: var(--color-text);
    font-weight: ${theme.fontWeight.medium};
  }

  a {
    font-size: ${theme.fontSizes.normalAlt};
    text-transform: lowercase;
  }
`;

export const ImageWrapper = styled.div`
  display: none;

  @media (min-width: ${breakPoints.md}) {
    display: block;
    position: absolute;
    width: 100%;
    height: 720px;
    top: 5%;
    right: -60%;
    overflow: hidden;
    border: 1px solid var(--color-reversetextwithopacity);
    border-radius: 5px;
    z-index: 1;

    > div:first-child {
      height: 100%;
    }
  }
`;

export const ProjectDetailsWrapper = styled.div`
  ${() => projectSectionLayoutMixin}

  h3 {
    font-size: ${theme.fontSizes.normalAlt};
    font-weight: ${theme.fontWeight.regular};
  }
`;

export const ProjectDescription = styled.p`
  margin: 2rem 0;
  font-size: ${theme.fontSizes.bigger};
  font-weight: 400;
  font-style: italic;
  text-align: center;

  @media (min-width: ${breakPoints.sm}) {
    margin: 4rem 0;
    font-size: ${theme.fontSizes.large};
    text-align: left;
  }
`;

export const MainProjectImageWrapper = styled.div`
  max-height: 1200px;
  overflow: hidden;
  border: 1px solid var(--color-reversetextwithopacity);
  border-radius: 1%;

  img {
    object-position: 0 0;
  }
`;

const OtherProjectImagesWrapper = css`
  ${() => secondaryImageMixin}
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: ${theme.layout.projectGridGap};
  margin-top: 4rem;

  @media (min-width: ${breakPoints.sm}) {
    grid-template-columns: repeat(auto-fill, minmax(25%, 1fr));
  }

  > div {
    max-height: calc(
      (100vw - ${theme.layout.layoutOffset}) *
        ${theme.ratios.iphone11AspectRatio}
    );

    @media (min-width: ${breakPoints.sm}) {
      max-height: calc(
        (
            (
                100vw - ${theme.layout.projectGridPadding} - 2 *
                  ${theme.layout.projectGridGap}
              ) / 3
          ) * ${theme.ratios.iphone11AspectRatio}
      );
    }

    @media screen and (max-height: ${breakPoints.xsm}) and (orientation: landscape) {
      max-height: 100%;
    }

    @media screen and (min-height: ${breakPoints.xsm}) and (max-height: ${breakPoints.sm}) and (orientation: landscape) {
      max-height: calc(
        (100vw - ${theme.layout.layoutOffset}) *
          ${theme.ratios.iphone11AspectRatio}
      );
    }
  }
`;

const OtherProjectImageWrapper = css`
  ${() => secondaryImageMixin}
  display: flex;
  margin-top: 4rem;
  height: 500px;
`;

export const ProjectImagesWrapper = styled.div<ProjectImages>`
  ${({ manyImages }) =>
    manyImages ? OtherProjectImagesWrapper : OtherProjectImageWrapper}
`;

export const ProjectCTA = styled.div`
  ${() => projectSectionLayoutMixin}
`;

export const ProjectCTAContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 0 25%;

  h3 {
    font-size: ${theme.fontSizes.bigger};
    font-weight: ${theme.fontWeight.bold};
    text-align: center;

    @media (min-width: ${breakPoints.sm}) {
      font-size: ${theme.fontSizes.mediumLight};
    }
  }

  @media screen and (max-height: ${breakPoints.sm}) and (orientation: landscape) {
    padding: 1rem 0;
  }
`;
