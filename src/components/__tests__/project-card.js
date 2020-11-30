// Libs
import React from 'react';

// Utils
import { render } from './utils/test-utils';
import { FLUID } from '../../pages/__tests__/index';

// Components
import ProjectCard from '../ProjectCard';
import SimplifiedProjectCard from '../ProjectCard/simplified-card';

const picture = {
  fluid: FLUID,
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
    test('mounts correctly', () => {
      const { container } = render(<SimplifiedProjectCard edge={EDGE} />);
      expect(container).toBeInTheDocument();
    });
  });
});
