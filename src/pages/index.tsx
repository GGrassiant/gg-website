// Libs
import React, { useEffect } from 'react';
import { navigate } from 'gatsby';

// Components
import IndexPageComponent from '../components/Pages/IndexPageComponent';

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
  useEffect(() => {
    const urlLang = getRedirectLanguage();

    if (urlLang !== 'en') {
      navigate(`/${urlLang}`);
    }
  }, []);
  return <IndexPageComponent />;
};

export default IndexPage;
