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
import styles from './contact.module.scss';
import ArmSvg from '../images/arm.svg';

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
      <div className={styles.contactPage}>
        <div className={styles.intro}>
          <Title size="xl">
            Hello
            <br /> World
          </Title>
          <div>
            <img src={ArmSvg} alt="rock-arm" />
          </div>
        </div>
        <ul className={styles.contactMeans}>
          <li className={styles.contactMeansItem}>
            <span>
              <HiOutlineMail className={styles.contactMeansType} />
            </span>
            <Link href="mailto:guillaumegrassiant@hey.com">
              guillaumegrassiant@hey.com
            </Link>
            <span>
              <AiOutlineArrowRight className={styles.contactMeansArrow} />
            </span>
          </li>
          <li className={styles.contactMeansItem}>
            <span>
              <FaLinkedinIn className={styles.contactMeansType} />
            </span>
            <Link href="https://www.linkedin.com/in/guillaumegrassiant">
              {intl.formatMessage({ id: 'Linkedin profile' })}
            </Link>
            <span>
              <AiOutlineArrowRight className={styles.contactMeansArrow} />
            </span>
          </li>
          <li className={styles.contactMeansItem}>
            <span>
              <AiFillGithub className={styles.contactMeansType} />
            </span>
            <Link href="https://github.com/GGrassiant">
              {intl.formatMessage({ id: 'Github profile' })}
            </Link>
            <span>
              <AiOutlineArrowRight className={styles.contactMeansArrow} />
            </span>
          </li>
        </ul>
      </div>
    </>
  );
};

const ctaContent = {
  title: generateRandomFooterCta(),
  component: () => <GetToKnowMe />,
};

export default withLayout(ContactPage, ctaContent);
