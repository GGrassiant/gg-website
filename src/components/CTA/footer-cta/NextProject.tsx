// Libs
import React, { useContext } from 'react';
import { useLocalization } from 'gatsby-theme-i18n';

// Utils
import { ProjectContext } from '../../../context/ProjectContext';
import { Edge } from '../../../../pages';
import { ensure, randomValueFromArray } from '../../../utils/typescript.utils';

// Components
import { useSiteMetadata } from '../../../utils/query-hooks';
import SimplifiedProjectCard from '../../ProjectCard/simplified-card';

const NextProject: React.FC = () => {
  const { locale } = useLocalization();
  const { currentProjectId } = useContext(ProjectContext);

  const {
    allContentfulProject: { group },
  } = useSiteMetadata();

  const informationElements: Array<Edge> = ensure(
    group.find((lang) => lang.fieldValue === locale),
  ).edges;

  const randomProject = randomValueFromArray(
    informationElements.filter((el) => el.node.id !== currentProjectId),
  );

  return (
    <SimplifiedProjectCard edge={randomProject} key={randomProject.node.id} />
  );
};

export default NextProject;
