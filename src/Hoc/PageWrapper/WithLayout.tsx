// Libs
import React from 'react';

// Utils
import { useLocalization } from 'gatsby-theme-i18n';
import { WithLayoutProps } from '../hoc.types';

// Components
import Layout from '../../components/Layout/layout';

const withLayout: (
  WrappedComponent: React.FC<any>,
  fullHeight?: boolean,
) => React.FC<WithLayoutProps> = (WrappedComponent, fullHeight) => (props) => {
  const { locale } = useLocalization();
  return (
    <Layout locale={locale} fullHeight={fullHeight}>
      <WrappedComponent {...props} locale={locale} />
    </Layout>
  );
};

export default withLayout;
