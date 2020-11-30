// Libs
import React from 'react';

// Utils
import { render } from '../../components/__tests__/utils/test-utils';

// Components
import { ProjectProvider } from '../ProjectContext';

describe('<ProjectProvider />', () => {
  describe('Mounts', () => {
    test('mounts correctly', () => {
      const { container } = render(
        <ProjectProvider>
          <div>Coucou</div>
        </ProjectProvider>,
      );

      expect(container).toBeInTheDocument();
    });
  });
});
