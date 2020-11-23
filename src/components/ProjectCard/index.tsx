// Libs
import React from 'react';
import Img from 'gatsby-image';

// Utils
import { ProjectCardProps } from './project-card-types';

// Styles
import { ProjectCardWrapper, ProjectCardHeader } from './project-card-styles';

// Components
import Title from '../Title';
import Link from '../Link';

const ProjectCard: React.FC<ProjectCardProps> = (props) => {
  const { edge } = props;
  return (
    <Link href={edge.node.githubLink}>
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
    </Link>
  );
};

export default ProjectCard;
