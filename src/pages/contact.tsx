// Libs
import React from 'react';
import { useIntl } from 'react-intl';
import { FaLinkedinIn } from 'react-icons/fa';
import { AiOutlineArrowRight, AiFillGithub } from 'react-icons/ai';
import { HiOutlineMail } from 'react-icons/hi';

// Utils
import { generateRandomFooterCta } from '../utils/typescript.utils';
import { WithLayoutProps } from '../Hoc/hoc.types';

// Styles
import ArmSvg from '../images/arm.svg';
import {
  ContactPageWrapper,
  IntroWrapper,
  ContactMeansList,
  ContactMeansItem,
} from '../components/Pages/contact-page-styles';

// Components
import GetToKnowMe from '../components/CTA/footer-cta/GetToKnowMe';
import withLayout from '../Hoc/PageWrapper/WithLayout';
import Title from '../components/Title';
import Link from '../components/Link';
import SEO from '../components/seo';

const ContactPage: React.FC<WithLayoutProps> = () => {
  const intl = useIntl();
  return (
    <>
      <SEO title="Contact Me" />
      <ContactPageWrapper>
        <IntroWrapper>
          <Title size="xl">
            Hello
            <br /> World
          </Title>
          <div>
            <img src={ArmSvg} alt="rock-arm" />
          </div>
        </IntroWrapper>
        <ContactMeansList>
          <ContactMeansItem>
            <span>
              <HiOutlineMail className="contact-means__type" />
            </span>
            <Link href="mailto:guillaumegrassiant@hey.com">
              guillaumegrassiant@hey.com
            </Link>
            <span>
              <AiOutlineArrowRight className="contact-means__arrow" />
            </span>
          </ContactMeansItem>
          <ContactMeansItem>
            <span>
              <FaLinkedinIn className="contact-means__type" />
            </span>
            <Link href="https://www.linkedin.com/in/guillaumegrassiant">
              {intl.formatMessage({ id: 'Linkedin profile' })}
            </Link>
            <span>
              <AiOutlineArrowRight className="contact-means__arrow" />
            </span>
          </ContactMeansItem>
          <ContactMeansItem>
            <span>
              <AiFillGithub className="contact-means__type" />
            </span>
            <Link href="https://github.com/GGrassiant">
              {intl.formatMessage({ id: 'Github profile' })}
            </Link>
            <span>
              <AiOutlineArrowRight className="contact-means__arrow" />
            </span>
          </ContactMeansItem>
        </ContactMeansList>
      </ContactPageWrapper>
    </>
  );
};

const ctaContent = {
  title: generateRandomFooterCta(),
  component: () => <GetToKnowMe />,
};

export default withLayout(ContactPage, ctaContent);
