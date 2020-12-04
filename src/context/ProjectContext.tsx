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
  projects: Array<Edge> | [];
}

interface ProjectStateContext extends ProjectsState {
  setCurrentProjectId: (arg: string) => void;
  setProjects: (arg: Array<Edge> | []) => void;
}

export const defaultState: ProjectStateContext = {
  currentProjectId: undefined,
  projects: [],
  setCurrentProjectId: (newProjectId) => console.log(newProjectId),
  setProjects: (newProjects) => console.log(newProjects),
};

export const ProjectContext: Context<ProjectStateContext> = createContext(
  defaultState,
);

export const ProjectProvider: React.FC<ProjectProps> = ({ children }) => {
  const [currentProjectId, setCurrentProjectId] = useState<
    ProjectState['currentProjectId']
  >(undefined);

  const [projects, setProjects] = useState<ProjectsState['projects']>([]);

  return (
    <ProjectContext.Provider
      value={{
        currentProjectId,
        projects,
        setCurrentProjectId,
        setProjects,
      }}
    >
      {children}
    </ProjectContext.Provider>
  );
};
