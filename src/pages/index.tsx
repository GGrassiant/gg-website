// Libs
import React, { useEffect, useRef } from 'react';
import { graphql, navigate } from 'gatsby';
import { AiOutlineArrowDown } from 'react-icons/ai';
import { useIntl } from 'react-intl';

// Utils
import * as langsSettings from '../utils/languages';
import { ensure, scrollToRefObject } from '../utils/typescript.utils';
import { Edge } from '../../pages';
import { WithLayoutProps } from '../Hoc/hoc.types';

// Styles
import styles from './index.module.scss';

// Components
import withLayout from '../Hoc/PageWrapper/WithLayout';
import SEO from '../components/seo';
import Title from '../components/Title';
import CTA from '../components/CTA';
import ProjectCard from '../components/ProjectCard';

export const getRedirectLanguage = (): string => {
  if (typeof navigator === 'undefined') {
    return `${langsSettings.defaultLangKey}`;
  }

  const lang: string =
    navigator && navigator.language && navigator.language.split('-')[0];
  if (!lang) return `${langsSettings.defaultLangKey}`;

  switch (lang) {
    case 'fr':
      return 'fr';
    default:
      return `${langsSettings.defaultLangKey}`;
  }
};

const IndexPage: React.FC<Pick<WithLayoutProps, 'data' | 'locale'>> = (
  props,
) => {
  const { data, locale } = props;
  const intl = useIntl();

  const informationElements: Array<Edge> = ensure(
    data?.allContentfulProject.group.find((lang) => lang.fieldValue === locale),
  ).edges;

  const renderInformation = (): Array<React.ReactElement> =>
    informationElements.map(
      (edge): React.ReactElement => (
        <ProjectCard edge={edge} key={edge.node.id} />
      ),
    );

  const projectsRef = useRef(null);
  const executeScroll = () => scrollToRefObject(projectsRef);

  useEffect((): void => {
    const urlLang: string = getRedirectLanguage();

    if (urlLang !== `${langsSettings.defaultLangKey}`) {
      navigate(`/${urlLang}`);
    }
  }, []);

  return (
    <>
      <div className={styles.home}>
        <SEO title="Home" />
        <div className={styles.home__title}>
          <Title size="xxl" weight="semibold">
            <p>{intl.formatMessage({ id: 'I am a Software' })}</p>
          </Title>
          <Title size="xxl" weight="semibold">
            <p>{intl.formatMessage({ id: 'Developer' })}</p>
            <CTA link="" onClick={executeScroll}>
              {intl.formatMessage({ id: 'Explore' })}
              <br />
              {intl.formatMessage({ id: 'my Projects' })}
              <AiOutlineArrowDown />
            </CTA>
          </Title>
        </div>
      </div>
      <div className={styles.homeProjectsWrapper} ref={projectsRef}>
        {renderInformation()}
      </div>
    </>
  );
};

export const query = graphql`
  query {
    allContentfulProject {
      group(field: node_locale) {
        fieldValue
        totalCount
        edges {
          node {
            title
            mainTech
            year
            slug
            id
            mainPicture {
              id
              fluid(maxWidth: 500) {
                ...GatsbyContentfulFluid
              }
            }
          }
        }
      }
    }
  }
`;

const fullHeight = true;

export default withLayout(IndexPage, fullHeight);
