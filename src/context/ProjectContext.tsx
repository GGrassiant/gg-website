// Libs
import React, { useState, createContext, Context } from 'react';

// Utils
import { Edge } from '../../pages';

interface ProjectProps {
  children: Array<React.ReactElement>;
}

interface ProjectState {
  currentProjectId: string | undefined;
}

interface ProjectsState extends ProjectState {
  projects: Array<Edge> | undefined;
}

interface ProjectStateContext extends ProjectsState {
  setProjects: (arg: Array<Edge> | []) => void;
  setDelayedProjectId: (arg: string) => void;
}

export const defaultState: ProjectStateContext = {
  currentProjectId: undefined,
  projects: [],
  setProjects: (newProjects) => console.log(newProjects),
  setDelayedProjectId: (newProjectId: string) => console.log(newProjectId),
};

export const ProjectContext: Context<ProjectStateContext> = createContext(
  defaultState,
);

export const ProjectProvider: React.FC<ProjectProps> = ({ children }) => {
  const [currentProjectId, setCurrentProjectId] = useState<
    ProjectState['currentProjectId']
  >(undefined);

  // As mention in NextProject.tsx, Gatsby Link prefetches data
  // and also causes a slight delay on mobile when navigating
  // causing a premature re-rendering of the NextProject card in the footer
  // and messing up with the randomized project.
  // A hacky-yet-working fix is to encapsulate the setting of the new project
  // id in a setTimeout.
  // The queue in the JS event loop doing the rest.
  const setDelayedProjectId = (id: string) =>
    setTimeout(() => setCurrentProjectId(id), 500);

  const [projects, setProjects] = useState<ProjectsState['projects']>([]);

  return (
    <ProjectContext.Provider
      value={{
        currentProjectId,
        projects,
        setDelayedProjectId,
        setProjects,
      }}
    >
      {children}
    </ProjectContext.Provider>
  );
};
