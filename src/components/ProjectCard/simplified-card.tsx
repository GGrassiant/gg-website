// Libs
import React from 'react';
import Img from 'gatsby-image';

// Utils
import { SimplifiedProjectCardProps } from './project-card-types';
import * as siteMetaData from '../../utils/siteMetaData';

// Styles
import {
  ProjectCardHeader,
  ProjectCardWrapper,
  SimplifiedCardLink,
} from './project-card-styles';

// Components
import Title from '../Title';

const SimplifiedProjectCard: React.FC<SimplifiedProjectCardProps> = (props) => {
  const { edge } = props;

  if (!edge) {
    return <p />;
  }

  return (
    <SimplifiedCardLink to={`${siteMetaData.menu[1].slug}${edge.node.slug}`}>
      <ProjectCardWrapper id={edge.node.title} footer>
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
            imgStyle={{ objectPosition: '0 0' }}
          />
        </div>
      </ProjectCardWrapper>
    </SimplifiedCardLink>
  );
};

export default SimplifiedProjectCard;
