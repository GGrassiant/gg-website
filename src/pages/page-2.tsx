// Libs
import React from 'react';

// Utils
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { LocalizedLink as Link, useLocalization } from 'gatsby-theme-i18n';

// Components
import { useIntl } from 'react-intl';
import SEO from '../components/seo';
import Layout from '../components/layout';

const SecondPage: React.FC = () => {
  const intl = useIntl();
  const { locale } = useLocalization();

  return (
    <Layout locale={locale}>
      <SEO title="Page two" />
      <h1>Hi from the second page</h1>
      <h1>{intl.formatMessage({ id: 'helloWorld' })}</h1>
      <Link to="/">Go back to the homepage</Link>
    </Layout>
  );
};

export default SecondPage;
