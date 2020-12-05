// Libs
import React, { useContext } from 'react';
import { LocalizedLink } from 'gatsby-theme-i18n';
import Img from 'gatsby-image';

// Utils
import { ProjectCardProps } from './project-card-types';
import * as siteMetaData from '../../utils/siteMetaData';
import { ProjectContext } from '../../context/ProjectContext';

// Styles
import { ProjectCardWrapper, ProjectCardHeader } from './project-card-styles';

// Components
import Title from '../Title';

const ProjectCard: React.FC<ProjectCardProps> = (props) => {
  const { edge } = props;
  const { setDelayedProjectId } = useContext(ProjectContext);

  const handleOnClick = () => {
    setDelayedProjectId(edge.node.id);
  };

  return (
    <LocalizedLink to={`${siteMetaData.menu[1].slug}${edge.node.slug}`}>
      <ProjectCardWrapper id={edge.node.title} onClick={handleOnClick}>
        <ProjectCardHeader>
          <span>{edge.node.mainTech}</span>
          <span>{edge.node.year}</span>
        </ProjectCardHeader>
        <Title size="medium" weight="bold">
          {edge.node.title}
        </Title>
        <div>
          <Img
            fluid={edge.node.mainPicture.fluid}
            key={edge.node.mainPicture.fluid.src}
            alt={edge.node.mainPicture.title}
            imgStyle={{ objectPosition: '0 0' }}
          />
        </div>
      </ProjectCardWrapper>
    </LocalizedLink>
  );
};

export default ProjectCard;
