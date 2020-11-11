// Libs
import React, { useRef } from 'react';
import { useIntl } from 'react-intl';
import { AiOutlineArrowDown, AiFillLinkedin } from 'react-icons/ai';
import { BsBoxArrowUpRight, BsCodeSlash } from 'react-icons/bs';
import { GrDocumentText } from 'react-icons/gr';
import { FaPhoneAlt } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

// Utils
import { WithLayoutProps } from '../../Hoc/hoc.types';
import { DescriptionEdge } from '../../../pages';
import { ensure } from '../../utils/typescript.utils';
import { SKILLS } from '../../utils/constants';

// Styles
import styles from './about.module.scss';

// Components
import withLayout from '../../Hoc/PageWrapper/WithLayout';
import SEO from '../seo';
import Title from '../Title';
import Image from '../Image/image';
import CTA from '../CTA';
import Link from '../Link';
import ArmImage from '../Image/arm';

const AboutPageComponent: React.FC<WithLayoutProps> = (props) => {
  const intl = useIntl();
  const { data, locale } = props;
  const descriptionElement: Array<DescriptionEdge> = ensure(
    data?.allContentfulDescription.group.find(
      (lang) => lang.fieldValue === locale,
    ),
  ).edges;

  const renderDescription = (): React.ReactNode => (
    <p>{descriptionElement[0].node.content}</p>
  );

  const renderSkills = (): Array<React.ReactNode> =>
    SKILLS.map((skillSet) => (
      <li key={skillSet.id} className={styles.skill__item}>
        <BsCodeSlash />
        {skillSet.skill}
      </li>
    ));

  const contactRef = useRef(null);
  const scrollToRefObject = (ref: React.MutableRefObject<null>) => {
    window.scrollTo({
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      top: ref?.current?.offsetTop,
      behavior: 'smooth',
    });
  };
  const executeScroll = () => scrollToRefObject(contactRef);

  return (
    <>
      <SEO title="About Me" />
      <div className={styles.about}>
        <div className={styles.intro}>
          <div className={styles.id_wrapper}>
            <Title size="xxl" weight="semibold">
              <span className={styles.initials}>GG,</span>{' '}
              {intl.formatMessage({ id: 'for' })}
              <br /> {intl.formatMessage({ id: 'intimes' })}
            </Title>
            <div className={styles.description}>{renderDescription()}</div>
          </div>
          <div className={styles.id_images}>
            <div className={styles.avatar}>
              <Image />
            </div>
            <div className={styles.cta__wrapper}>
              <CTA onClick={executeScroll}>
                {intl.formatMessage({ id: 'contact-me' })}{' '}
                <AiOutlineArrowDown />
              </CTA>
            </div>
          </div>
          <div className={styles.cta__wrapper__mobile}>
            <CTA onClick={executeScroll}>
              {intl.formatMessage({ id: 'contact-me' })} <AiOutlineArrowDown />
            </CTA>
          </div>
        </div>
        <div className={styles.skills}>
          <Title size="medium" weight="semibold">
            {intl.formatMessage({ id: 'skills' })}
          </Title>
          <ul className={styles.skills__list}>{renderSkills()}</ul>
        </div>
        <div className={styles.experience}>
          <Title size="medium" weight="semibold">
            {intl.formatMessage({ id: 'experience' })}
            <br /> & {intl.formatMessage({ id: 'education' })}
          </Title>
          <div className={styles.experience__content__wrapper}>
            <div className={styles.experience__content}>
              <GrDocumentText />
              <Link href="https://drive.google.com/file/d/1FWqspNFcz4xOw326Uckna7Ciam8erI_-/view?usp=sharing">
                {intl.formatMessage({ id: 'Resume' })}
                <BsBoxArrowUpRight />
              </Link>
            </div>
          </div>
        </div>
        <div className={styles.contact} ref={contactRef}>
          <div className={styles.contact__content__wrapper}>
            <Title size="medium" weight="semibold">
              {intl.formatMessage({ id: 'contact-me' })}{' '}
              {intl.formatMessage({ id: 'now' })}
            </Title>
            <div className={styles.contact__content}>
              <div className={styles.contact__content__arm}>
                <ArmImage />
              </div>
              <ul className={styles.contact__content__list}>
                <li className={styles.contact__content__item}>
                  <span>
                    <MdEmail />
                  </span>
                  <a
                    href="mailto:guillaumegrassiant@hey.com"
                    target="_blank"
                    rel="noreferrer"
                  >
                    guillaumegrassiant@hey.com
                  </a>
                </li>
                <li className={styles.contact__content__item}>
                  <span>
                    <FaPhoneAlt />
                  </span>
                  514 823 6883
                </li>
                <li className={styles.contact__content__item}>
                  <span>
                    <AiFillLinkedin />
                  </span>
                  <a
                    href="https://www.linkedin.com/in/guillaumegrassiant"
                    target="_blank"
                    rel="noreferrer"
                  >
                    www.linkedin.com/in/guillaumegrassiant
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const fullHeight = true;

export default withLayout(AboutPageComponent, fullHeight);
