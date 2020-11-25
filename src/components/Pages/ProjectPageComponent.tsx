// Libs
import React from 'react';
import Img from 'gatsby-image';
import { AiOutlineArrowLeft } from 'react-icons/ai';

// Utils
import { ProjectPageComponentProps } from '../../../pages';

// Styles
import styles from './project.module.scss';

// Components
import withLayout from '../../Hoc/PageWrapper/WithLayout';
import SEO from '../seo';
import { generateRandomFooterCta } from '../../utils/typescript.utils';
import GetToKnowMe from '../CTA/footer-cta/GetToKnowMe';
import LetsConnect from '../CTA/footer-cta/LetsConnect';
import { BackButton } from './project-page.style';

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
      },
    },
  } = props;

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
          <p>Photos/....</p>
          <h3>Know more</h3>
          <LetsConnect />
        </div>
      </div>
    </>
  );
};

const fullHeight = true;
const ctaContent = {
  title: generateRandomFooterCta(),
  component: () => <GetToKnowMe />,
};

export default withLayout(ProjectPageComponent, fullHeight, ctaContent);
