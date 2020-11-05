// Libs
import React from 'react';

// Utils
import { useLocalization } from 'gatsby-theme-i18n';
import { WithLayoutProps } from '../hoc.types';

// Components
import Layout from '../../components/Layout/layout';

const withLayout: (
  WrappedComponent: React.FC<any>,
  banner?: boolean,
  fullHeight?: boolean,
) => React.FC<WithLayoutProps> = (WrappedComponent, banner, fullHeight) => (
  props,
) => {
  const { locale } = useLocalization();
  return (
    <Layout locale={locale} banner={banner} fullHeight={fullHeight}>
      <WrappedComponent {...props} locale={locale} />
    </Layout>
  );
};

export default withLayout;
