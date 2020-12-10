// Libs
import styled from 'styled-components';

// Styles
import { breakPoints, theme } from '../../utils/constants';

export const AboutPageWrapper = styled.div`
  padding-top: ${theme.layout.headerHeight};
  font-family: ${theme.fonts.defaultFont};

  @media (min-height: ${breakPoints.sm}) {
    padding: ${theme.layout.headerHeight} 3.5rem;
  }
`;

export const IntroWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 2rem;
  border-bottom: 1px solid var(--color-reversetextwithopacity);

  @media (min-width: ${breakPoints.lg}) {
    display: grid;
    grid-template-columns: 4fr 2fr;
    height: calc(100vh - 5rem);
  }

  @media (min-width: ${breakPoints.lg}) and (min-height: ${breakPoints.SmallHeight}) {
    height: 600px;
  }
`;

export const IdWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  order: 2;

  @media (min-width: ${breakPoints.lg}) {
    align-items: flex-start;
  }

  div {
    text-align: center;

    @media (min-width: ${breakPoints.sm}) {
      text-align: left;
    }
  }
`;

export const Initials = styled.span`
  color: #e1e417;
`;

export const DescriptionWrapper = styled.div`
  width: 80%;
  padding-top: 1rem;
  font-size: ${theme.fontSizes.normalAlt};
  line-height: 45px;

  @media (min-width: ${breakPoints.lg}) {
    text-align: left;
    margin-left: ${theme.layout.titleOffset};
  }
}
`;

export const IdImages = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (min-width: ${breakPoints.lg}) {
    order: 2;
  }
`;

export const Avatar = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
  height: 60%;
  width: 250px;

  @media (min-width: ${breakPoints.lg}) {
    margin: 0 0 0 4rem;
  }

  img {
    border-radius: 50%;
  }
`;

export const CtaWrapper = styled.div`
  display: none;

  @media (min-width: ${breakPoints.lg}) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 40%;
  }

  div {
    position: relative;
    cursor: pointer;

    svg {
      position: absolute;
      left: 50%;
      bottom: 15%;
      transform: translateX(-50%);
    }
  }
`;

export const CtaWrapperMobile = styled.div`
  order: 3;
  margin: 1rem auto;

  div {
    position: relative;
    cursor: pointer;

    svg {
      position: absolute;
      left: 50%;
      bottom: 20%;
      transform: translateX(-50%);
    }
  }

  @media (min-width: ${breakPoints.lg}) {
    display: none;
  }
`;

export const AttributesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 2rem;

  @media (min-width: ${breakPoints.lg}) {
    display: grid;
    grid-template-columns: minmax(33%, 1fr) 2fr;
    padding: 2rem 0;
  }

  &:not(.experience) {
    border-bottom: 1px solid var(--color-reversetextwithopacity);
  }
`;

export const SkillsList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

export const SkillItem = styled.li`
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
`;

export const ExperienceContentWrapper = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
`;

export const ExperienceContent = styled.div`
  display: flex;
  align-items: center;
  height: fit-content;
  width: 100%;
  padding: 1.5rem 0;

  a {
    font-size: ${theme.fontSizes.normalAlt};
  }

  > svg:first-of-type {
    background-color: var(--color-reversebackground);
    color: var(--color-text);
    margin-right: 1rem;
    padding: 0.4rem;
    border-radius: 50%;
    font-size: ${theme.fontSizes.bigger};
    font-weight: ${theme.fontWeight.medium};
  }
`;
