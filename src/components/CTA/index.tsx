// Libs
import React from 'react';
import { LocalizedLink } from 'gatsby-theme-i18n';

// Utils
import { CTAProps } from './cta-types';
import * as siteMetaData from '../../utils/siteMetaData';

// Styles
import { CTAWrapper } from './cta-styles';

const CTA: React.FC<CTAProps> = (props) => {
  const { size = 'medium', theme = 'dark', link, children } = props;
  return (
    <CTAWrapper size={size} theme={theme}>
      {link ? (
        <LocalizedLink to={siteMetaData.menu[1].slug}>
          <p>{children}</p>
        </LocalizedLink>
      ) : (
        <p>{children}</p>
      )}
    </CTAWrapper>
  );
};

export default CTA;
