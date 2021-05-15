// Libs
import React, { useEffect, useContext } from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';
import { useIntl } from 'react-intl';
import { AiOutlineArrowLeft, AiOutlineCalendar } from 'react-icons/ai';
import { BsCodeSlash, BsPeople, BsLink45Deg } from 'react-icons/bs';

// Utils
import { ContenfulImage, ProjectPageComponentProps } from '../../../site';
import { ProjectContext } from '../../context/ProjectContext';

// Styles
import {
  ProjectPageWrapper,
  BackButton,
  ProjectInfoWrapper,
  ProjectInfoList,
  ProjectInfoItem,
  ImageWrapper,
  ProjectDetailsWrapper,
  ProjectDescription,
  MainProjectImageWrapper,
  ProjectImagesWrapper,
  ProjectCTA,
  ProjectCTAContent,
} from './project-page.style';

// Components
import withLayout from '../../Hoc/PageWrapper/WithLayout';
import SEO from '../seo';
import LetsConnect from '../CTA/footer-cta/LetsConnect';
import NextProject from '../CTA/footer-cta/NextProject';
import Link from '../Link';

const ProjectPageComponent: React.FC<ProjectPageComponentProps> = (props) => {
  const {
    data: {
      contentfulProject: {
        title,
        year,
        mainPicture,
        team,
        id,
        techStack,
        shortDescription,
        link,
        projectPictures,
      },
    },
  } = props;
  const { setProjectInfo } = useContext(ProjectContext);
  const intl = useIntl();

  const renderProjectImages = (images: Array<ContenfulImage>) => (
    <>
      <MainProjectImageWrapper>
        <GatsbyImage
          key={images[0].gatsbyImageData.id}
          alt={`${title}-other-picture-${images[0].title}`}
          image={images[0].gatsbyImageData}
        />
      </MainProjectImageWrapper>
      {images.length > 1 && (
        <ProjectImagesWrapper manyImages={images.length > 2}>
          {images.slice(1).map((otherImage: ContenfulImage) => {
            return (
              <GatsbyImage
                key={otherImage.id}
                alt={`${title}-other-picture-${otherImage.title}`}
                image={otherImage.gatsbyImageData}
                imgStyle={{
                  objectPosition: '0 0',
                  height: 'auto',
                  width: '100%',
                }}
              />
            );
          })}
        </ProjectImagesWrapper>
      )}
    </>
  );

  useEffect(() => {
    setProjectInfo(id);
  }, [id, setProjectInfo]);

  return (
    <>
      <SEO title="Project page" />
      <ProjectPageWrapper>
        <ProjectInfoWrapper>
          <BackButton to={`/#${title}`}>
            <AiOutlineArrowLeft />
            <span>All Projects</span>
          </BackButton>
          <h2>{title}</h2>
          <ProjectInfoList>
            <ProjectInfoItem>
              <div>
                <AiOutlineCalendar />
              </div>
              {year}
            </ProjectInfoItem>
            <ProjectInfoItem>
              <div>
                <BsCodeSlash />
              </div>
              {techStack}
            </ProjectInfoItem>
            <ProjectInfoItem>
              <div>
                <BsPeople />
              </div>
              {team}
            </ProjectInfoItem>
            <ProjectInfoItem>
              <div>
                <BsLink45Deg />
              </div>
              <Link href={`https://${link}`}>{link}</Link>
            </ProjectInfoItem>
          </ProjectInfoList>
          <ImageWrapper>
            <GatsbyImage
              alt={`${title}-main-picture`}
              image={mainPicture.gatsbyImageData}
              imgStyle={{
                objectPosition: '0 0',
              }}
            />
          </ImageWrapper>
        </ProjectInfoWrapper>
        <ProjectDetailsWrapper>
          <h3>Description</h3>
          <ProjectDescription>{shortDescription}</ProjectDescription>
          <div>{renderProjectImages(projectPictures)}</div>
        </ProjectDetailsWrapper>
        <ProjectCTA>
          <ProjectCTAContent>
            <h3>{intl.formatMessage({ id: 'know more' })}</h3>
            <LetsConnect />
          </ProjectCTAContent>
        </ProjectCTA>
      </ProjectPageWrapper>
    </>
  );
};

const ctaContent = {
  title: 'next project',
  component: () => <NextProject />,
};

export default withLayout(ProjectPageComponent, ctaContent);
