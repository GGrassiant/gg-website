// Libs
import React from 'react';
import { cache, SWRConfig } from 'swr';

// Utils
import { render } from './utils/test-utils';

// Components
import NotFoundPage from '../../pages/404';

describe('<NotFoundPage>', () => {
  beforeEach(() => cache.clear());
  describe('mounts', () => {
    test('component mounts', () => {
      const { container, getByTestId } = render(<NotFoundPage />);
      expect(container).toBeInTheDocument();
      expect(getByTestId('custom-loader')).toBeInTheDocument();
    });

    test('fetches data', async () => {
      const { findByText } = render(
        <SWRConfig value={{ dedupingInterval: 0 }}>
          <NotFoundPage />
        </SWRConfig>,
      );
      const notFound = await findByText('not-found');
      expect(notFound).toBeInTheDocument();
    });
  });
});
