// Libs
import React, { useState, createContext, Context } from 'react';

interface ProjectProps {
  children: Array<React.ReactElement>;
}

interface ProjectState {
  currentProjectId: string | undefined;
}

interface ProjectStateContext extends ProjectState {
  setCurrentProjectId: (arg: string) => void;
}

export const defaultState: ProjectStateContext = {
  currentProjectId: undefined,
  setCurrentProjectId: (newProjectId) => console.log(newProjectId),
};

export const ProjectContext: Context<ProjectStateContext> = createContext(
  defaultState,
);

export const ProjectProvider: React.FC<ProjectProps> = ({ children }) => {
  const [currentProjectId, setCurrentProjectId] = useState<
    ProjectState['currentProjectId']
  >(undefined);

  return (
    <ProjectContext.Provider
      value={{
        currentProjectId,
        setCurrentProjectId,
      }}
    >
      {children}
    </ProjectContext.Provider>
  );
};
