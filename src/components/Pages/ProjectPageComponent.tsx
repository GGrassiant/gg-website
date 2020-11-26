// Libs
import React from 'react';
import Img from 'gatsby-image';
import { useIntl } from 'react-intl';
import { AiOutlineArrowLeft } from 'react-icons/ai';

// Utils
import { ProjectPageComponentProps } from '../../../pages';
import { ContenfulImage } from '../../../site';

// Styles
import styles from './project.module.scss';
import { BackButton } from './project-page.style';

// Components
import withLayout from '../../Hoc/PageWrapper/WithLayout';
import SEO from '../seo';
import LetsConnect from '../CTA/footer-cta/LetsConnect';

const ProjectPageComponent: React.FC<ProjectPageComponentProps> = (props) => {
  const {
    data: {
      contentfulProject: {
        title,
        year,
        mainPicture,
        team,
        techStack,
        shortDescription,
        link,
        projectPictures,
      },
    },
  } = props;
  const intl = useIntl();

  const renderProjectImages = (images: Array<ContenfulImage>) => (
    <>
      <div className={styles.mainProjectImage}>
        <Img
          fluid={images[0].fluid}
          key={images[0].fluid.src}
          alt={images[0].title}
        />
      </div>
      <div className={styles.otherProjectImages}>
        {images.slice(1).map((otherImage: ContenfulImage) => (
          <Img
            fluid={otherImage.fluid}
            key={otherImage.fluid.src}
            alt={otherImage.title}
            imgStyle={{ objectPosition: '0 0' }}
          />
        ))}
      </div>
    </>
  );

  return (
    <>
      <SEO title="Project page" />
      <div className={styles.projectPage}>
        <div className={styles.projectInfo}>
          <BackButton to={`/#${title}`}>
            <AiOutlineArrowLeft />
            All Projects
          </BackButton>
          <h2>{title}</h2>
          <ul className={styles.projectInfoList}>
            <li className={styles.projectInfoItem}>{year}</li>
            <li className={styles.projectInfoItem}>{techStack}</li>
            <li className={styles.projectInfoItem}>{team}</li>
            <li className={styles.projectInfoItem}>{link}</li>
          </ul>
          <div className={styles.imageWrapper}>
            <Img
              fluid={mainPicture.fluid}
              key={mainPicture.fluid.src}
              alt={mainPicture.title}
            />
          </div>
        </div>
        <div className={styles.projectDetails}>
          <h3>Description</h3>
          <p className={styles.projectDescription}>{shortDescription}</p>
          <div>{renderProjectImages(projectPictures)}</div>
        </div>
        <div className={styles.projectCTA}>
          <div className={styles.projectCTAContent}>
            <h3>{intl.formatMessage({ id: 'know more' })}</h3>
            <LetsConnect />
          </div>
        </div>
      </div>
    </>
  );
};

const fullHeight = true;
const ctaContent = {
  title: 'next project',
  component: () => <LetsConnect />,
};

export default withLayout(ProjectPageComponent, fullHeight, ctaContent);
