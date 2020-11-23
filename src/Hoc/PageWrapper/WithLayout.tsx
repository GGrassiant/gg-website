// Libs
import React from 'react';

// Utils
import { useLocalization } from 'gatsby-theme-i18n';
import { WithLayoutProps } from '../hoc.types';
import { FooterProps } from '../../components/Footer/footer-types';

// Components
import Layout from '../../components/Layout/layout';
import Footer from '../../components/Footer';

const withLayout: (
  WrappedComponent: React.FC<any>,
  fullHeight?: boolean,
  ctaContent?: FooterProps['ctaContent'],
) => React.FC<WithLayoutProps> = (WrappedComponent, fullHeight, ctaContent) => (
  props,
) => {
  const { locale } = useLocalization();
  return (
    <Layout locale={locale} fullHeight={fullHeight}>
      <WrappedComponent {...props} locale={locale} />
      <Footer ctaContent={ctaContent} />
    </Layout>
  );
};

export default withLayout;
