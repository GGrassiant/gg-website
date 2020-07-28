// Libs
import React from 'react';

// Utils
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { LocalizedLink as Link } from 'gatsby-theme-i18n';

// Components
import { useIntl } from 'react-intl';
import SEO from '../components/seo';

const SecondPage: React.FC = () => {
  const intl = useIntl();
  return (
    <>
      <SEO title="Page two" />
      <h1>Hi from the second page</h1>
      <p>Welcome to page 2</p>
      <h1>{intl.formatMessage({ id: 'helloWorld' })}</h1>
      <Link to="/">Go back to the homepage</Link>
    </>
  );
};

export default SecondPage;
