// Libs
import React from 'react';

// Utils
import { render } from './utils/test-utils';

// Components
import NotFoundPage from '../../pages/404';

jest.mock('../../utils/fetcher', () => {
  return {
    fetcher: jest.fn().mockImplementation(() => {
      console.log('lol');
      return {
        message: 'lolz',
      };
    }),
  };
});

describe('<NotFoundPage>', () => {
  describe('mounts', () => {
    test('component mounts', () => {
      const { container, getByTestId } = render(<NotFoundPage />);
      expect(container).toBeInTheDocument();
      expect(getByTestId('custom-loader')).toBeInTheDocument();
    });

    test('fetches the doggo', async () => {
      const { findByText, findByTestId } = render(<NotFoundPage />);
      const notFound = await findByText('not-found');
      const imgUrl = await findByTestId('doggo-img');
      expect(notFound).toBeInTheDocument();
      expect(imgUrl).toHaveAttribute('src', 'lolz');
    });
  });
});
