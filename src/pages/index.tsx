// Libs
import React, { useEffect } from 'react';
import { navigate } from 'gatsby';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { BsBoxArrowUpRight } from 'react-icons/bs';
import { useIntl } from 'react-intl';

// Utils
import * as langsSettings from '../utils/languages';

// Utils
import styles from './index.module.scss';
import { IndexProps } from './index-types';

// Components
import withLayout from '../Hoc/PageWrapper/WithLayout';
import SEO from '../components/seo';
import Title from '../components/Title';
import CTA from '../components/CTA';
import Link from '../components/Link';

const getRedirectLanguage = (): string => {
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

const IndexPage: React.FC<IndexProps> = (props) => {
  const intl = useIntl();
  const { darkTheme } = props;

  useEffect((): void => {
    const urlLang: string = getRedirectLanguage();

    if (urlLang !== `${langsSettings.defaultLangKey}`) {
      navigate(`/${urlLang}`);
    }
  }, []);

  return (
    <div className={styles.home}>
      <SEO title="Home" />
      <div className={styles.home__title}>
        <Title size="xxl" weight="semibold">
          {intl.formatMessage({ id: 'I am Software' })}
        </Title>
        <Title size="xxl" weight="semibold">
          {intl.formatMessage({ id: 'Developer' })}
        </Title>
        <CTA theme={darkTheme ? 'dark' : 'light'} link="projects">
          {intl.formatMessage({ id: 'Explore' })}
          <br />
          {intl.formatMessage({ id: 'my Projects' })} <AiOutlineArrowRight />
        </CTA>
      </div>
      <div className={styles.home__links}>
        <Link
          theme={darkTheme ? 'dark' : 'light'}
          href="https://www.linkedin.com/in/guillaumegrassiant/"
        >
          LinkedIn
          <BsBoxArrowUpRight />
        </Link>
        <Link
          theme={darkTheme ? 'dark' : 'light'}
          href="https://github.com/GGrassiant"
        >
          Github
          <BsBoxArrowUpRight />
        </Link>
      </div>
    </div>
  );
};

const bannerPresent = true;
const fullHeight = true;

export default withLayout(IndexPage, bannerPresent, fullHeight);
