// Libs
import React, { useContext, useState, useEffect } from 'react';

// Utils
import { ProjectContext } from '../../../context/ProjectContext';
import { Edge } from '../../../../pages';

// Components
import SimplifiedProjectCard from '../../ProjectCard/simplified-card';

const NextProject: React.FC = () => {
  const { currentRandomProject } = useContext(ProjectContext);
  const [randomProject, setRandomProject] = useState<Edge | undefined>(
    undefined,
  );

  // Gatsby Link pre fetches data on hover at first load
  // https://github.com/gatsbyjs/gatsby/blob/master/packages/gatsby-link/src/index.js#LC227
  // Therefore triggers a re-render of the SimplifiedCard on hover
  // Causing a flicker. If using a normal Link from react/router with no prefetch
  // prevents the static page to be created hence causes a 404 (needs a page reload)
  // To solve this, instead of just creating the randomProject on the fly,
  // we store it in a local state and change it through a useEffect dependency
  useEffect(() => {
    setRandomProject(currentRandomProject);
  }, [currentRandomProject]);

  if (!randomProject) {
    return <p>Loading...</p>;
  }

  return (
    <SimplifiedProjectCard edge={randomProject} key={randomProject?.node.id} />
  );
};

export default NextProject;
