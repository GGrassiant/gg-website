// Libs
import React, { useContext, useState, useEffect, memo } from 'react';
import { useLocalization } from 'gatsby-theme-i18n';

// Utils
import { ProjectContext } from '../../../context/ProjectContext';
import { Edge } from '../../../../pages';
import {
  randomValueFromArray,
  getLocalizedDataFromContentful,
} from '../../../utils/typescript.utils';

// Components
import { useSiteMetadata } from '../../../utils/query-hooks';
import SimplifiedProjectCard from '../../ProjectCard/simplified-card';

const NextProject: React.FC = () => {
  const { locale } = useLocalization();
  const { currentProjectId } = useContext(ProjectContext);
  const [randomProject, setRandomProject] = useState<Edge | undefined>(
    undefined,
  );

  // TODO: Get it from context instead,
  // ideally already filtered by the language
  const {
    allContentfulProject: { group },
  } = useSiteMetadata();

  // Gatsby Link pre fetches data on hover at first load
  // https://github.com/gatsbyjs/gatsby/blob/master/packages/gatsby-link/src/index.js#LC227
  // Therefore triggers a re-render of the Simplified Card on hover
  // Causing a flicker. If using a normal Link from react/router with no prefetch
  // prevents the static page to be created hence causes a 404 (needs a page reload)
  // To solve this, instead of just creating the randomProject on the fly,
  // we store it in a local state and change it through a useEffect dependency

  useEffect(() => {
    const localizedProjects = getLocalizedDataFromContentful(
      group,
      locale,
    ).filter((el) => el.node.id !== currentProjectId);

    setRandomProject(randomValueFromArray(localizedProjects));
  }, [currentProjectId, group, locale]);

  if (!randomProject) {
    return <p />;
  }

  return (
    <SimplifiedProjectCard edge={randomProject} key={randomProject?.node.id} />
  );
};

export default memo(NextProject);
