/* eslint-disable */
// Libs
import React from 'react';

// Utils
import { useLocalization } from 'gatsby-theme-i18n';
import { WithLayoutProps } from '../hoc.types';
import { FooterProps } from '../../components/Footer/footer-types';

// Styles
import GlobalStyle from '../../components/Layout/layout-styles';

// Components
import Layout from '../../components/Layout/layout';
import Footer from '../../components/Footer';

const withLayout: (
  WrappedComponent: React.FC<any>,
  ctaContent?: FooterProps['ctaContent'],
) => React.FC<WithLayoutProps> = (WrappedComponent, ctaContent) => (props) => {
  const { locale } = useLocalization();
  return (
    <>
      <GlobalStyle />
      <Layout locale={locale}>
        <WrappedComponent {...props} locale={locale} />
        <Footer />
      </Layout>
    </>
  );
};

export default withLayout;
