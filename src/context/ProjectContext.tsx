// Libs
import React, { useState, createContext, Context } from 'react';

// Utils
import { Edge } from '../../pages';
import { randomValueFromArray } from '../utils/typescript.utils';

interface ProjectProps {
  children: Array<React.ReactElement>;
}

interface ProjectState {
  currentRandomProjectId: string | undefined;
}

interface ProjectsState extends ProjectState {
  projects: Array<Edge> | undefined;
}

interface ProjectStateContext extends ProjectsState {
  setProjects: (arg: Array<Edge> | []) => void;
  setProjectInfo: (arg: string) => void;
}

export const defaultState: ProjectStateContext = {
  currentRandomProjectId: undefined,
  projects: [],
  setProjects: (newProjects) => console.log(newProjects),
  setProjectInfo: (newProjectId: string) => console.log(newProjectId),
};

export const ProjectContext: Context<ProjectStateContext> = createContext(
  defaultState,
);

export const ProjectProvider: React.FC<ProjectProps> = ({ children }) => {
  const [currentRandomProjectId, setCurrentRandomProjectId] = useState<
    ProjectState['currentRandomProjectId']
  >(undefined);

  const [projects, setProjects] = useState<ProjectsState['projects']>([]);

  const setProjectInfo = (id: string): void => {
    const filteredProjects = projects?.filter(
      (project) => project.node.id !== id,
    );

    return (
      filteredProjects &&
      setCurrentRandomProjectId(randomValueFromArray(filteredProjects)?.node.id)
    );
  };

  return (
    <ProjectContext.Provider
      value={{
        setProjects,
        projects,
        setProjectInfo,
        currentRandomProjectId,
      }}
    >
      {children}
    </ProjectContext.Provider>
  );
};
