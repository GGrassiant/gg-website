// Libs
import React from 'react';

// Utils
import { render } from './utils/test-utils';
import { GatsbyImageData, GatsbyImageData2, GatsbyImageData3 } from '../../pages/__tests__/index';

// Components
import ProjectCard from '../ProjectCard';
import SimplifiedProjectCard from '../ProjectCard/simplified-card';
import { ProjectCardWrapper } from '../ProjectCard/project-card-styles';

const picture = {
  id: Math.random(),
  gatsbyImageData: GatsbyImageData,
  localFile: {
    childImageSharp: { GatsbyImageData },
  },
};

const picture2 = {
  id: Math.random(),
  gatsbyImageData: GatsbyImageData2,
};

const picture3 = {
  id: Math.random(),
  gatsbyImageData: GatsbyImageData3,
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
    projectPictures: [picture3, picture2],
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
    projectPictures: [picture3, picture2],
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
    projectPictures: [picture, picture3, picture2],
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
      const { getByTestId } = render(<SimplifiedProjectCard edge={undefined} />);
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
          <ProjectCardWrapper data-testid="project-card-wrapper" footer colorMode="light" />
        </div>,
      );
      const wrapper = getByTestId('project-card-wrapper');
      expect(wrapper).toBeInTheDocument();
    });
  });
});
