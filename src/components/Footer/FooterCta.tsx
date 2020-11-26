// Libs
import React from 'react';
import { useIntl } from 'react-intl';

// Styles
import { FooterCtaWrapper } from './footer-cta-styles';

// Components
import Title from '../Title';

type FooterCtaProps = {
  title?: string;
  component?: React.FC<any>;
  projectPage?: boolean;
};

const FooterCta: React.FC<FooterCtaProps> = (props) => {
  const { title, component, projectPage } = props;
  const intl = useIntl();
  return (
    <FooterCtaWrapper projectPage={projectPage}>
      <Title size="l">{intl.formatMessage({ id: title })}</Title>
      {component && component(undefined)}
    </FooterCtaWrapper>
  );
};

export default FooterCta;
