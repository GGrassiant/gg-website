// Libs
import React from 'react';

// Utils
import { render } from './utils/test-utils';
import { fetcher } from '../../utils/fetcher';

// Components
import NotFoundPage from '../../pages/404';

jest.mock('../../utils/fetcher', () => ({
  fetcher: jest.fn(),
}));

describe('<NotFoundPage>', () => {
  describe('mounts', () => {
    test('component mounts loader', () => {
      fetcher.mockImplementation(() => undefined);
      const { container, getByTestId } = render(<NotFoundPage />);
      expect(container).toBeInTheDocument();
      expect(getByTestId('custom-loader')).toBeInTheDocument();
    });

    test('fetches the doggo', async () => {
      fetcher.mockImplementation(() => ({
        message: 'lolz',
      }));
      const { findByText, findByTestId } = render(<NotFoundPage />);
      const notFound = await findByText('not-found');
      const imgUrl = await findByTestId('doggo-img');
      expect(notFound).toBeInTheDocument();
      expect(imgUrl).toHaveAttribute('src', 'lolz');
    });

    test('error', async () => {
      fetcher.mockImplementation(() => {
        throw new Error('API Client Error');
      });
      const { findByText, findByTestId } = render(<NotFoundPage />);
      const notFound = await findByText('not-found');
      const imgUrl = await findByTestId('doggo-img');
      expect(notFound).toBeInTheDocument();
      expect(imgUrl).toHaveAttribute('src', 'test-file-stub');
    });
  });
});
