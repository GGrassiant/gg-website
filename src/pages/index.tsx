// Libs
import React, { useEffect } from 'react';
import { navigate, graphql } from 'gatsby';

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

const IndexPage: React.FC<any> = (props) => {
  const { data } = props;

  useEffect(() => {
    const urlLang = getRedirectLanguage();

    if (urlLang !== 'en') {
      navigate(`/${urlLang}`);
    }
  }, []);

  // Need to create a component to pass the data since we use withLayout HOC
  return <IndexPageComponent data={data} />;
};

export const query = graphql`
  query {
    allContentfulProject {
      group(field: node_locale) {
        edges {
          node {
            shortDescription
          }
        }
      }
    }
  }
`;

export default IndexPage;
