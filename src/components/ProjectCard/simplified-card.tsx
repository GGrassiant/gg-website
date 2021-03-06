// Libs
import React, { useContext } from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';

// Utils
import { SimplifiedProjectCardProps } from './project-card-types';
import * as siteMetaData from '../../utils/siteMetaData';
import { ThemeContext } from '../../context/ThemeContext';

// Styles
import { ProjectCardHeader, ProjectCardWrapper, SimplifiedCardLink } from './project-card-styles';

// Components
import Title from '../Title';
import Loader from '../Loader';

const SimplifiedProjectCard: React.FC<SimplifiedProjectCardProps> = (props) => {
  const { edge } = props;
  const { colorMode } = useContext(ThemeContext);

  if (!edge) {
    return <Loader />;
  }

  return (
    <SimplifiedCardLink
      to={`${siteMetaData.menu[1].slug}${edge.node.slug}`}
      data-testid="simplifiedCardLink"
    >
      <ProjectCardWrapper id={edge.node.title} footer colorMode={colorMode}>
        <ProjectCardHeader>
          <span>{edge.node.mainTech}</span>
          <span>{edge.node.year}</span>
        </ProjectCardHeader>
        <Title size="footer" weight="bold">
          {edge.node.title}
        </Title>
        <div>
          <GatsbyImage
            alt="gg-avatar"
            image={edge.node.mainPicture.localFile.childImageSharp.gatsbyImageData}
            imgStyle={{ objectPosition: '0 0' }}
          />
        </div>
      </ProjectCardWrapper>
    </SimplifiedCardLink>
  );
};

export default SimplifiedProjectCard;
