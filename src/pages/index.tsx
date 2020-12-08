// Libs
import React, { memo, useContext, useEffect, useRef } from 'react';
import { navigate } from 'gatsby';
import { AiOutlineArrowDown } from 'react-icons/ai';
import { useIntl } from 'react-intl';

// Utils
import * as langsSettings from '../utils/languages';
import {
  generateRandomFooterCta,
  scrollToRefObject,
} from '../utils/typescript.utils';
import { ProjectContext } from '../context/ProjectContext';
import { Edge } from '../../site';

// Styles
import styles from './index.module.scss';

// Components
import withLayout from '../Hoc/PageWrapper/WithLayout';
import SEO from '../components/seo';
import Title from '../components/Title';
import CTA from '../components/CTA';
import ProjectCard from '../components/ProjectCard';
import LetsConnect from '../components/CTA/footer-cta/LetsConnect';

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

const IndexPage: React.FC = () => {
  const { projects } = useContext(ProjectContext);
  const intl = useIntl();

  const renderInformation = (): Array<React.ReactElement> | undefined =>
    projects?.map(
      (project: Edge): React.ReactElement => (
        <ProjectCard edge={project} key={project?.node.id} />
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
            <CTA
              link=""
              onClick={executeScroll}
              data-testid="custom-scroll-element"
            >
              {intl.formatMessage({ id: 'Explore' })}
              <br />
              {intl.formatMessage({ id: 'my Projects' })}
              <AiOutlineArrowDown />
            </CTA>
          </Title>
        </div>
      </div>
      <div
        className={styles.homeProjectsWrapper}
        ref={projectsRef}
        id="projects"
      >
        {renderInformation()}
      </div>
    </>
  );
};

const fullHeight = true;
const ctaContent = {
  title: generateRandomFooterCta(),
  component: () => <LetsConnect />,
};

export default memo(withLayout(IndexPage, fullHeight, ctaContent));
