// Libs
import React, { useContext } from 'react';
import Img from 'gatsby-image';

// Utils
import { ProjectCardProps } from './project-card-types';
import { ProjectContext } from '../../context/ProjectContext';
import * as siteMetaData from '../../utils/siteMetaData';

// Styles
import {
  ProjectCardHeader,
  ProjectCardWrapper,
  SimplifiedCardLink,
} from './project-card-styles';

// Components
import Title from '../Title';

const SimplifiedProjectCard: React.FC<ProjectCardProps> = (props) => {
  const { edge } = props;
  const { setCurrentProjectId } = useContext(ProjectContext);

  const handleOnClick = () => {
    setCurrentProjectId(edge.node.id);
  };
  return (
    <SimplifiedCardLink to={`${siteMetaData.menu[1].slug}${edge.node.slug}`}>
      <ProjectCardWrapper id={edge.node.title} onClick={handleOnClick} footer>
        <ProjectCardHeader>
          <span>{edge.node.mainTech}</span>
          <span>{edge.node.year}</span>
        </ProjectCardHeader>
        <Title size="footer" weight="bold">
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
    </SimplifiedCardLink>
  );
};

export default SimplifiedProjectCard;
