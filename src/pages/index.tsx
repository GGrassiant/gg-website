// Libs
import React, { useEffect } from 'react';
import { navigate } from 'gatsby';
// import { AiOutlineArrowRight } from 'react-icons/ai';
// import { BsBoxArrowUpRight } from 'react-icons/bs';
// import { useIntl } from 'react-intl';

// Utils
import * as langsSettings from '../utils/languages';

// Utils
import styles from './index.module.scss';
import { IndexProps } from '../../pages';

// Components
import withLayout from '../Hoc/PageWrapper/WithLayout';
// import SEO from '../components/seo';
// import Title from '../components/Title';
// import CTA from '../components/CTA';
// import Link from '../components/Link';

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
  console.log(props);
  // const intl = useIntl();
  // const { darkTheme } = props;

  useEffect((): void => {
    const urlLang: string = getRedirectLanguage();

    if (urlLang !== `${langsSettings.defaultLangKey}`) {
      navigate(`/${urlLang}`);
    }
  }, []);

  return (
    <div className={styles.home}>
      return <p className={styles.testlolx}>Coucou</p>;
    </div>
  );
};

const bannerPresent = true;
const fullHeight = true;

export default withLayout(IndexPage, bannerPresent, fullHeight);
