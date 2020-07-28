// Libs
import React, { useEffect } from 'react';
import { navigate, graphql } from 'gatsby';

// Utils
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { useLocalization, LocalizedLink as Link } from 'gatsby-theme-i18n';
import { useIntl } from 'react-intl';

// Components
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

const IndexPage: React.FC<any> = (props) => {
  const { data } = props;
  console.log(data);
  const intl = useIntl();
  const { locale, config, defaultLang } = useLocalization();

  useEffect(() => {
    const urlLang = getRedirectLanguage();

    if (urlLang !== 'en') {
      navigate(`/${urlLang}`);
    }
  }, []);

  return (
    <>
      <SEO title="Home" />
      <h1>Hi people</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <div>Current locale: {locale}</div>
      <div>Current defaultLang: {defaultLang}</div>
      <h1>{intl.formatMessage({ id: 'helloWorld' })}</h1>
      <pre>{JSON.stringify(config, null, 2)}</pre>
      <div style={{ maxWidth: '300px', marginBottom: '1.45rem' }}>
        <Image />
      </div>
      <Link to="/page-2/">Go to page 2</Link> <br />
    </>
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
