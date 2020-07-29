// Libs
import React from 'react';

// Utils
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { useLocalization } from 'gatsby-theme-i18n';

// Components
import Layout from '../../components/layout';

const withLayout: any = (WrappedComponent: any) => (props: any) => {
  const { locale } = useLocalization();
  return (
    <Layout locale={locale}>
      <WrappedComponent props={props} />
    </Layout>
  );
};

export default withLayout;
