// Libs
import React from 'react';
import { LocalizedLink } from 'gatsby-theme-i18n';
import Img from 'gatsby-image';

// Utils
import { ProjectCardProps } from './project-card-types';
import * as siteMetaData from '../../utils/siteMetaData';

// Styles
import { ProjectCardWrapper, ProjectCardHeader } from './project-card-styles';

// Components
import Title from '../Title';

const ProjectCard: React.FC<ProjectCardProps> = (props) => {
  const { edge } = props;
  return (
    <LocalizedLink to={`${siteMetaData.menu[1].slug}${edge.node.slug}`}>
      <ProjectCardWrapper id={edge.node.title}>
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
          />
        </div>
      </ProjectCardWrapper>
    </LocalizedLink>
  );
};

export default ProjectCard;
