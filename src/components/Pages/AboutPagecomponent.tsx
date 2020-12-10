// Libs
import React, { useRef } from 'react';
import { useIntl } from 'react-intl';
import { AiOutlineArrowDown } from 'react-icons/ai';
import { BsBoxArrowUpRight, BsCodeSlash } from 'react-icons/bs';
import { TiDocumentText } from 'react-icons/ti';

// Utils
import { WithLayoutProps } from '../../Hoc/hoc.types';
import { DescriptionEdge, TechSkillEdge } from '../../../site';
import { ensure, generateRandomFooterCta } from '../../utils/typescript.utils';

// Styles
import {
  AboutPageWrapper,
  IntroWrapper,
  IdWrapper,
  Initials,
  DescriptionWrapper,
  IdImages,
  Avatar,
  CtaWrapper,
  CtaWrapperMobile,
  AttributesWrapper,
  SkillsList,
  SkillItem,
  ExperienceContentWrapper,
  ExperienceContent,
} from './about-page-styles';

// Components
import withLayout from '../../Hoc/PageWrapper/WithLayout';
import SEO from '../seo';
import Title from '../Title';
import Image from '../Image/image';
import CTA from '../CTA';
import Link from '../Link';
import LetsConnect from '../CTA/footer-cta/LetsConnect';

const AboutPageComponent: React.FC<WithLayoutProps> = (props) => {
  const intl = useIntl();
  const { data, locale } = props;
  const descriptionElement: Array<DescriptionEdge> = ensure(
    data?.allContentfulDescription.group.find(
      (lang) => lang.fieldValue === locale,
    ),
  ).edges;

  const skillsElement: Array<TechSkillEdge> = ensure(
    data?.allContentfulTechSkills.group.find(
      (lang) => lang.fieldValue === locale,
    ),
  ).edges;

  const resumeURL = data?.allContentfulAsset.edges[0].node.file.url;

  const renderDescription = (): React.ReactNode => (
    <p>{descriptionElement[0].node.content}</p>
  );

  const renderSkills = (): Array<React.ReactNode> =>
    skillsElement.map((skillSet) => (
      <SkillItem key={skillSet.node.id}>
        <BsCodeSlash />
        {skillSet.node.skill}
      </SkillItem>
    ));

  const translatedCta = intl.formatMessage(
    { id: 'get to know me' },
    { breakingLine: '<br/>' },
  );

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
      <AboutPageWrapper>
        <IntroWrapper>
          <IdWrapper>
            <Title size="xxl" weight="semibold">
              <Initials>GG,</Initials> {intl.formatMessage({ id: 'for' })}
              <br /> {intl.formatMessage({ id: 'intimes' })}
            </Title>
            <DescriptionWrapper>{renderDescription()}</DescriptionWrapper>
          </IdWrapper>
          <IdImages>
            <Avatar>
              <Image />
            </Avatar>
            <CtaWrapper>
              <CTA onClick={executeScroll} data-testid="custom-scroll-element">
                <span dangerouslySetInnerHTML={{ __html: translatedCta }} />
                <AiOutlineArrowDown />
              </CTA>
            </CtaWrapper>
          </IdImages>
          <CtaWrapperMobile>
            <CTA onClick={executeScroll}>
              <span dangerouslySetInnerHTML={{ __html: translatedCta }} />
              <AiOutlineArrowDown />
            </CTA>
          </CtaWrapperMobile>
        </IntroWrapper>
        <AttributesWrapper ref={contactRef}>
          <Title size="medium" weight="semibold">
            {intl.formatMessage({ id: 'skills' })}
          </Title>
          <SkillsList>{renderSkills()}</SkillsList>
        </AttributesWrapper>
        <AttributesWrapper className="experience">
          <Title size="medium" weight="semibold">
            {intl.formatMessage({ id: 'experience' })}
            <br /> & {intl.formatMessage({ id: 'education' })}
          </Title>
          <ExperienceContentWrapper>
            <ExperienceContent>
              <TiDocumentText />
              <Link href={resumeURL}>
                {intl.formatMessage({ id: 'Resume' })}
                <BsBoxArrowUpRight />
              </Link>
            </ExperienceContent>
          </ExperienceContentWrapper>
        </AttributesWrapper>
      </AboutPageWrapper>
    </>
  );
};

const ctaContent = {
  title: generateRandomFooterCta(),
  component: () => <LetsConnect />,
};

export default withLayout(AboutPageComponent, ctaContent);
