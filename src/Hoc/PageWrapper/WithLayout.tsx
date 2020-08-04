// Libs
import React from 'react';

// Utils
import { useLocalization } from 'gatsby-theme-i18n';
import { WithLayoutProps } from '../hoc.types';

// Components
import Layout from '../../components/layout';

const withLayout: (
  WC: React.FC<WithLayoutProps>,
) => React.FC<WithLayoutProps> = (WrappedComponent) => (props) => {
  const { locale } = useLocalization();
  return (
    <Layout locale={locale}>
      <WrappedComponent {...props} locale={locale} />
    </Layout>
  );
};

export default withLayout;
