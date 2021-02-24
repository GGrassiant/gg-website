// Libs
import React from 'react';
import { BsBoxArrowUpRight } from 'react-icons/bs';

// Styles
import { FooterWrapper, PermanentFooter, PermanentFooterContent } from './footer-styles';

// Components
import FooterCta from './FooterCta';
import Link from '../Link';
import HenloFren from '../HenloFren/HenloFren';

// Utils
import { FooterProps } from './footer-types';
import { validateObjectValues } from '../../utils/typescript.utils';

const Footer: React.FC<FooterProps> = (props) => {
  const { ctaContent } = props;
  const ctaInFooter = ctaContent && validateObjectValues(ctaContent);
  return (
    <FooterWrapper cta={ctaInFooter}>
      {ctaInFooter && <FooterCta title={ctaContent?.title} component={ctaContent?.component} />}
      <PermanentFooter>
        <PermanentFooterContent>
          <p>Guillaume Grassiant - 2021</p>
          <div className="links-wrapper">
            <Link href="https://www.linkedin.com/in/guillaumegrassiant/">
              <span>LinkedIn</span>
              <BsBoxArrowUpRight />
            </Link>
            <Link href="https://github.com/GGrassiant">
              <span>Github</span>
              <BsBoxArrowUpRight />
            </Link>
          </div>
          <HenloFren />
        </PermanentFooterContent>
      </PermanentFooter>
    </FooterWrapper>
  );
};

export default Footer;
