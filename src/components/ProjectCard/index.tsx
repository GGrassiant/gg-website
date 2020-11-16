// Libs
import React from 'react';
import Img from 'gatsby-image';

// Utils
import { LocalizedLink } from 'gatsby-theme-i18n';
import * as siteMetaData from '../../utils/siteMetaData';
import { ProjectCardProps } from './project-card-types';

// Styles
import { ProjectCardWrapper, ProjectCardHeader } from './project-card-styles';

// Components
import Title from '../Title';

const ProjectCard: React.FC<ProjectCardProps> = (props) => {
  const { edge } = props;
  return (
    <LocalizedLink to={`${siteMetaData.menu[1].slug}${edge.node.slug}`}>
      <ProjectCardWrapper>
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
