// Libs
import React from 'react';

// Utils
import { render } from './utils/test-utils';
import { FLUID, FLUID_2 } from '../../pages/__tests__/index';

// Components
import ProjectCard from '../ProjectCard';
import SimplifiedProjectCard from '../ProjectCard/simplified-card';
import { ProjectCardWrapper } from '../ProjectCard/project-card-styles';

const picture = {
  fluid: FLUID,
  title: 'lol-picture',
};

const picture2 = {
  fluid: FLUID_2,
  title: 'lol-picture',
};

export const EDGE = {
  node: {
    id: 'lol',
    slug: 'lol',
    title: 'lolz',
    mainTech: 'internet',
    year: '1982',
    mainPicture: picture,
    projectPictures: [picture],
    team: 'A Team',
    techStack: 'React',
    shortDescription: 'short description',
    link: 'www.lolz.com',
  },
};

export const EDGE_TWO_IMAGES = {
  node: {
    id: 'lol',
    slug: 'lol',
    title: 'lolz',
    mainTech: 'internet',
    year: '1982',
    mainPicture: picture,
    projectPictures: [picture, picture],
    team: 'A Team',
    techStack: 'React',
    shortDescription: 'short description',
    link: 'www.lolz.com',
  },
};

export const EDGE_RANDOM_PROJECT = {
  node: {
    id: 'Notlol',
    slug: 'lol',
    title: 'lolz',
    mainTech: 'internet',
    year: '1982',
    mainPicture: picture,
    projectPictures: [picture, picture],
    team: 'A Team',
    techStack: 'React',
    shortDescription: 'short description',
    link: 'www.lolz.com',
  },
};

export const EDGE_MULTIPLE_IMAGES = {
  node: {
    id: 'lol',
    slug: 'lol',
    title: 'lolz',
    mainTech: 'internet',
    year: '1982',
    mainPicture: picture,
    projectPictures: [picture, picture, picture2],
    team: 'A Team',
    techStack: 'React',
    shortDescription: 'short description',
    link: 'www.lolz.com',
  },
};

describe('<ProjectCard />', () => {
  describe('mounts', () => {
    test('mounts correctly', () => {
      const { container } = render(<ProjectCard edge={EDGE} />);
      expect(container).toBeInTheDocument();
    });
  });
});

describe('<SimplifiedProjectCard />', () => {
  describe('mounts', () => {
    test('mounts correctly', async () => {
      const { container } = render(<SimplifiedProjectCard edge={EDGE} />);
      expect(container).toBeInTheDocument();
    });

    test('mounts with no Edge', async () => {
      const { getByTestId } = render(
        <SimplifiedProjectCard edge={undefined} />,
      );
      const loadingElement = await getByTestId('custom-loader');
      expect(loadingElement).toBeInTheDocument();
    });
  });
});

describe('styled components', () => {
  describe('<ProjectCardWrapper>', () => {
    test('no props', () => {
      const { getByTestId } = render(
        <div>
          <ProjectCardWrapper
            data-testid="project-card-wrapper"
            footer
            colorMode="light"
          />
        </div>,
      );
      const wrapper = getByTestId('project-card-wrapper');
      expect(wrapper).toBeInTheDocument();
    });
  });
});
