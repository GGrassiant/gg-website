// Libs
import React, { useEffect } from 'react';
import { navigate, graphql } from 'gatsby';

// Utils
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { LocalizedLink, useLocalization } from 'gatsby-theme-i18n';
import { useIntl } from 'react-intl';

// Components
import SEO from '../components/seo';
import Image from '../components/image';
import Layout from '../components/layout';

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
  const intl = useIntl();
  const { locale } = useLocalization();

  console.log(data);

  useEffect(() => {
    const urlLang = getRedirectLanguage();

    if (urlLang !== 'en') {
      navigate(`/${urlLang}`);
    }
  }, []);

  return (
    <Layout locale={locale}>
      <SEO title="Home" />
      <h1>{intl.formatMessage({ id: 'helloWorld' })}</h1>
      <div style={{ maxWidth: '300px', marginBottom: '1.45rem' }}>
        <Image />
      </div>
      <LocalizedLink to="/page-2/">Go to page 2</LocalizedLink> <br />
    </Layout>
  );
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
