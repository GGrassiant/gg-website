// Libs
import React from 'react';

// Utils
import { LocalizedLink as Link } from 'gatsby-theme-i18n';

// Components
import { useIntl } from 'react-intl';
import withLayout from '../Hoc/PageWrapper/WithLayout';
import SEO from '../components/seo';

const SecondPage: React.FC = () => {
  const intl = useIntl();

  return (
    <>
      <SEO title="Page two" />
      <h1>Hi from the second page</h1>
      <h1>{intl.formatMessage({ id: 'helloWorld' })}</h1>
      <Link to="/">Go back to the homepage</Link>
    </>
  );
};

export default withLayout(SecondPage);
