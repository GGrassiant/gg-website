// Libs
import React from 'react';
import { BsBoxArrowUpRight } from 'react-icons/bs';

// Styles
import {
  FooterWrapper,
  PermanentFooter,
  PermanentFooterContent,
} from './footer-styles';
import { FunnyFaceWrapper } from '../Layout/layout-styles';

// Components
import FooterCta from './FooterCta';
import Link from '../Link';

// Utils
import { FooterProps } from './footer-types';
import { validateObjectValues } from '../../utils/typescript.utils';
import Image from '../Image/image';

const Footer: React.FC<FooterProps> = (props) => {
  const { ctaContent } = props;
  const ctaInFooter = ctaContent && validateObjectValues(ctaContent);
  return (
    <FooterWrapper cta={ctaInFooter}>
      {ctaInFooter && (
        <FooterCta
          title={ctaContent?.title}
          component={ctaContent?.component}
        />
      )}
      <PermanentFooter>
        <PermanentFooterContent>
          <p>Guillaume Grassiant - 2020</p>
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
          <FunnyFaceWrapper>
            <Image />
          </FunnyFaceWrapper>
        </PermanentFooterContent>
      </PermanentFooter>
    </FooterWrapper>
  );
};

export default Footer;
