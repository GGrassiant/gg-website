// Libs
import React from 'react';

// Utils
import { render } from '../../components/__tests__/utils/test-utils';

// Components
import AboutPage from '../about';

describe('<AboutPage />', () => {
  describe('mounts', () => {
    test('mounts', () => {
      const data = {
        allContentfulDescription: {
          group: [{ fieldValue: 'en', edges: [{ node: { content: 'lol' } }] }],
        },
        allContentfulAsset: {
          edges: [{ node: { id: 'resume', file: { url: 'url-resume' } } }],
        },
        allContentfulTechSkills: {
          group: [
            {
              fieldValue: 'en',
              edges: [{ node: { id: 'lol', skill: 'manger' } }],
            },
          ],
        },
      };
      const { container } = render(<AboutPage data={data} />);
      expect(container).toBeInTheDocument();
    });
  });
});
