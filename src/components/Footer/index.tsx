// Libs
import React from 'react';
import { BsBoxArrowUpRight } from 'react-icons/bs';

// Styles
import {
  FooterWrapper,
  PermanentFooter,
  PermanentFooterContent,
} from './footer-styles';

// Components
import FooterCta from './FooterCta';
import Link from '../Link';

// Utils
import { FooterProps } from './footer-types';
import { validateObjectValues } from '../../utils/typescript.utils';

const Footer: React.FC<FooterProps> = (props) => {
  const { ctaContent } = props;
  const ctaInFooter = ctaContent && validateObjectValues(ctaContent);
  const inProjectPage = Boolean(ctaInFooter && ctaContent?.projectPage);
  return (
    <FooterWrapper cta={ctaInFooter} projectPage={inProjectPage}>
      {ctaInFooter && (
        <FooterCta
          title={ctaContent?.title}
          component={ctaContent?.component}
          projectPage={inProjectPage}
        />
      )}
      <PermanentFooter>
        <PermanentFooterContent>
          <p>Guillaume Grassiant - 2020</p>
          <div className="links-wrapper">
            <Link href="https://www.linkedin.com/in/guillaumegrassiant/">
              LinkedIn
              <BsBoxArrowUpRight />
            </Link>
            <Link href="https://github.com/GGrassiant">
              Github
              <BsBoxArrowUpRight />
            </Link>
          </div>
        </PermanentFooterContent>
      </PermanentFooter>
    </FooterWrapper>
  );
};

export default Footer;
