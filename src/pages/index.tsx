// Libs
import React, { useEffect } from 'react';
import { navigate } from 'gatsby';

// Components
import SEO from '../components/seo';

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

const IndexPage: React.FC = () => {
  useEffect(() => {
    const urlLang = getRedirectLanguage();

    navigate(`/${urlLang}`);
  }, []);

  return <SEO title="Home" />;
};

export default IndexPage;
