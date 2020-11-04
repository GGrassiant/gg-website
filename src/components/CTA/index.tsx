// Libs
import React from 'react';
import { LocalizedLink } from 'gatsby-theme-i18n';

// Utils
import { CTAProps } from './cta-types';
import * as siteMetaData from '../../utils/siteMetaData';
import { ensure } from '../../utils/typescript.utils';

// Styles
import { CTAWrapper } from './cta-styles';

const CTA: React.FC<CTAProps> = (props) => {
  const { link, children } = props;
  let hrefUrl;

  if (link) {
    hrefUrl = ensure(siteMetaData.menu.find((el) => el.label === link)).slug;
  }

  return (
    <CTAWrapper>
      {link ? (
        <LocalizedLink to={hrefUrl}>
          <p>{children}</p>
        </LocalizedLink>
      ) : (
        <p>{children}</p>
      )}
    </CTAWrapper>
  );
};

export default CTA;
