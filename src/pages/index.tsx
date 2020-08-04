// Libs
import React, { useEffect } from 'react';
import { navigate } from 'gatsby';

// Utils
import { LocalizedLink } from 'gatsby-theme-i18n';
import { useIntl } from 'react-intl';
import * as langsSettings from '../utils/languages';

// Components
import withLayout from '../Hoc/PageWrapper/WithLayout';
import SEO from '../components/seo';
import Image from '../components/image';

const getRedirectLanguage = (): string => {
  if (typeof navigator === 'undefined') {
    return `${langsSettings.defaultLangKey}`;
  }

  const lang =
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
    <>
      <SEO title="Home" />
      <h1>{intl.formatMessage({ id: 'helloWorld' })}</h1>
      <div style={{ maxWidth: '300px', marginBottom: '1.45rem' }}>
        <Image />
      </div>
      <LocalizedLink to="/page-2/">Go to page 2</LocalizedLink> <br />
    </>
  );
};

export default withLayout(IndexPage);
