// Libs
import React, { useState } from 'react';
import { Location } from '@reach/router';
import { render } from '@testing-library/react';

// Utils
import { ThemeContext } from '../../../context/ThemeContext';
import { ProjectContext } from '../../../context/ProjectContext';
import { randomValueFromArray } from '../../../utils/typescript.utils';

// a - Context Providers
const AllTheProviders = ({ children }) => {
  const [colorMode, setColorModeHandler] = useState(undefined);
  const [currentRandomProject, setCurrentRandomProject] = useState(undefined);
  const [projects, setProjects] = useState([]);
  const setColorMode = (value) => setColorModeHandler(value);
  const setProjectInfo = (value) => {
    const filteredProjects = projects?.filter((project) => project.node.id !== value);
    return filteredProjects && setCurrentRandomProject(randomValueFromArray(filteredProjects));
  };
  return (
    <ThemeContext.Provider
      value={{
        colorMode,
        setColorMode,
      }}
    >
      <ProjectContext.Provider
        value={{
          currentRandomProject,
          setProjectInfo,
          projects,
          setProjects,
        }}
      >
        {children}
      </ProjectContext.Provider>
    </ThemeContext.Provider>
  );
};

const customRender = (ui, options) => render(ui, { wrapper: AllTheProviders, ...options });

// re-export everything
export * from '@testing-library/react';

// override render method
export { customRender as render };

// b - Reach Router mock
export const renderWithRouterLocation = (
  Component,
  location = { location: { pathname: '/' } },
  locale = 'en',
) => {
  return {
    ...customRender(
      <Location>
        <Component locale={locale} siteTitle="site title" location={location} />
      </Location>,
    ),
  };
};
