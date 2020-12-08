// Libs
import React, { useState, createContext, Context } from 'react';

// Utils
import { Edge } from '../../site';
import { randomValueFromArray } from '../utils/typescript.utils';

interface ProjectProps {
  children: Array<React.ReactElement>;
}

interface ProjectState {
  currentRandomProject: Edge | undefined;
}

interface ProjectsState extends ProjectState {
  projects: Array<Edge> | undefined;
}

interface ProjectStateContext extends ProjectsState {
  setProjects: (arg: Array<Edge> | []) => void;
  setProjectInfo: (arg: string) => void;
}

export const defaultState: ProjectStateContext = {
  currentRandomProject: undefined,
  projects: [],
  setProjects: (newProjects) => console.log(newProjects),
  setProjectInfo: (newProjectId: string) => console.log(newProjectId),
};

export const ProjectContext: Context<ProjectStateContext> = createContext(
  defaultState,
);

export const ProjectProvider: React.FC<ProjectProps> = ({ children }) => {
  const [currentRandomProject, setCurrentRandomProject] = useState<
    ProjectState['currentRandomProject']
  >(undefined);

  const [projects, setProjects] = useState<ProjectsState['projects']>([]);

  const setProjectInfo = (id: string): void => {
    const filteredProjects = projects?.filter(
      (project) => project.node.id !== id,
    );

    return (
      filteredProjects &&
      setCurrentRandomProject(randomValueFromArray(filteredProjects))
    );
  };

  return (
    <ProjectContext.Provider
      value={{
        setProjects,
        projects,
        setProjectInfo,
        currentRandomProject,
      }}
    >
      {children}
    </ProjectContext.Provider>
  );
};
