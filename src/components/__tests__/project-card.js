// Libs
import React from 'react';

// Utils
import { render } from './utils/test-utils';
import { FLUID } from '../../pages/__tests__/index';

// Components
import ProjectCard from '../ProjectCard';

const EDGE = {
  node: {
    id: 'lol',
    slug: 'lol',
    title: 'lolz',
    mainTech: 'internet',
    year: '1982',
    mainPicture: {
      fluid: FLUID,
      title: 'lol-picture',
    },
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
