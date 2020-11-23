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
};

const FooterCta: React.FC<FooterCtaProps> = (props) => {
  const { title, component } = props;
  const intl = useIntl();
  return (
    <FooterCtaWrapper>
      <Title size="l">{intl.formatMessage({ id: title })}</Title>
      {component && component(undefined)}
    </FooterCtaWrapper>
  );
};

export default FooterCta;
