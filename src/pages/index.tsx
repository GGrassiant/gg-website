// Libs
import React, { useEffect } from 'react';
import { navigate } from 'gatsby';
// import { AiOutlineArrowRight } from 'react-icons/ai';
import { BsBoxArrowUpRight } from 'react-icons/bs';
// import { useIntl } from 'react-intl';

// Utils
import * as langsSettings from '../utils/languages';
import { IndexProps } from '../../pages';

// Styles
import styles from './index.module.scss';

// Components
import withLayout from '../Hoc/PageWrapper/WithLayout';
// import SEO from '../components/seo';
// import Title from '../components/Title';
// import CTA from '../components/CTA';
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
  // const intl = useIntl();
  const { darkTheme } = props;

  useEffect((): void => {
    const urlLang: string = getRedirectLanguage();

    if (urlLang !== `${langsSettings.defaultLangKey}`) {
      navigate(`/${urlLang}`);
    }
  }, []);

  return (
    <div className={styles.home}>
      <div className={styles.home__links}>
        <p className={styles.lolzlolz}>Lolz</p>
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
