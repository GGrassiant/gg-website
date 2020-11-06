/* eslint no-unused-vars: 0 */
// Libs
import React, { useEffect } from 'react';
import { navigate } from 'gatsby';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { BsBoxArrowUpRight } from 'react-icons/bs';
import { useIntl } from 'react-intl';

// Utils
import * as langsSettings from '../utils/languages';

// Styles
import styles from './index.module.scss';

// Components
import withLayout from '../Hoc/PageWrapper/WithLayout';
import SEO from '../components/seo';
import Title from '../components/Title';
import CTA from '../components/CTA';
import Link from '../components/Link';
import { TitleWrapperXXL } from '../components/Title/title-styles';

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

const IndexPage: React.FC = () => {
  const intl = useIntl();

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
        <TitleWrapperXXL weight="semibold">
          <p>{intl.formatMessage({ id: 'I am a Software' })}</p>
        </TitleWrapperXXL>
        <TitleWrapperXXL weight="semibold">
          <p>{intl.formatMessage({ id: 'Developer' })}</p>
          <CTA link="projects">
            {intl.formatMessage({ id: 'Explore' })}
            <br />
            {intl.formatMessage({ id: 'my Projects' })} <AiOutlineArrowRight />
          </CTA>
        </TitleWrapperXXL>
      </div>
      <div className={styles.home__links}>
        <Link href="https://www.linkedin.com/in/guillaumegrassiant/">
          LinkedIn
          <BsBoxArrowUpRight />
        </Link>
        <Link href="https://github.com/GGrassiant">
          Github
          <BsBoxArrowUpRight />
        </Link>
        <Link href="https://drive.google.com/file/d/1FWqspNFcz4xOw326Uckna7Ciam8erI_-/view?usp=sharing">
          {intl.formatMessage({ id: 'Resume' })}
          <BsBoxArrowUpRight />
        </Link>
      </div>
    </div>
  );
};

const bannerPresent = true;
const fullHeight = true;

export default withLayout(IndexPage, bannerPresent, fullHeight);
