// Libs
import React, { useEffect } from 'react';
import { navigate } from 'gatsby';

// Utils
import { LocalizedLink } from 'gatsby-theme-i18n';
import { useIntl } from 'react-intl';

// Components
import withLayout from '../Hoc/PageWrapper/WithLayout';
import SEO from '../components/seo';
import Image from '../components/image';

const getRedirectLanguage = () => {
  if (typeof navigator === 'undefined') {
    return 'en';
  }

  const lang =
    navigator && navigator.language && navigator.language.split('-')[0];
  if (!lang) return 'en';

  switch (lang) {
    case 'fr':
      return 'fr';
    default:
      return 'en';
  }
};

const IndexPage: React.FC<any> = () => {
  const intl = useIntl();
  useEffect(() => {
    const urlLang = getRedirectLanguage();

    if (urlLang !== 'en') {
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
