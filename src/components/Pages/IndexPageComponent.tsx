// Libs
import React from 'react';

// Utils
import { LocalizedLink } from 'gatsby-theme-i18n';
import { useIntl } from 'react-intl';

// Components
import withLayout from '../../Hoc/PageWrapper/WithLayout';
import SEO from '../seo';
import Image from '../image';

const IndexPageComponent: React.FC<any> = () => {
  const intl = useIntl();
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

export default withLayout(IndexPageComponent);
