// Libs
import React from 'react';
import { cache, SWRConfig } from 'swr';

// Utils
import { render } from './utils/test-utils';
import { fetcher } from '../../utils/fetcher';

// Components
import NotFoundPage from '../../pages/404';
import { FOFImageWrapper, DoggoPictureSkeleton } from '../Pages/404-styles';

afterEach(() => {
  cache.clear();
});

jest.mock('../../utils/fetcher', () => ({
  fetcher: jest.fn(),
}));

describe('<NotFoundPage>', () => {
  describe('mounts', () => {
    test('component mounts loader', () => {
      fetcher.mockImplementation(() => undefined);
      const { container, getByTestId } = render(
        <SWRConfig value={{ dedupingInterval: 0 }}>
          <NotFoundPage />
        </SWRConfig>,
      );
      expect(container).toBeInTheDocument();
      expect(getByTestId('custom-loader')).toBeInTheDocument();
    });

    test('fetches the doggo', async () => {
      fetcher.mockImplementation(() => ({
        message: 'lolz',
      }));
      const { container, findByText, findByTestId } = render(
        <SWRConfig value={{ dedupingInterval: 0 }}>
          <NotFoundPage />
        </SWRConfig>,
      );
      const notFound = await findByText('not-found');
      const imgUrl = await findByTestId('doggo-img');
      expect(container).toBeInTheDocument();
      expect(notFound).toBeInTheDocument();
      expect(imgUrl).toHaveAttribute('src', 'lolz');
    });

    test('error', async () => {
      fetcher.mockImplementation(() => {
        throw new Error('API Client Error');
      });
      const { container, findByText, findByTestId } = render(
        <SWRConfig value={{ dedupingInterval: 0 }}>
          <NotFoundPage />
        </SWRConfig>,
      );
      const notFound = await findByText('not-found');
      const imgUrl = await findByTestId('doggo-img');
      expect(container).toBeInTheDocument();
      expect(notFound).toBeInTheDocument();
      expect(imgUrl).toHaveAttribute('src', 'test-file-stub');
    });
  });

  describe('styled components', () => {
    describe('<DoggoSkeleton', () => {
      test('picture not loader', () => {
        const { getByTestId } = render(
          <div>
            <DoggoPictureSkeleton doggoPictureLoaded={false} data-testid="doggo-skeleton" />
          </div>,
        );
        const doggo = getByTestId('doggo-skeleton');

        expect(doggo).toHaveStyle('display: flex');
      });

      test('picture loaded', () => {
        const { getByTestId } = render(
          <div>
            <DoggoPictureSkeleton doggoPictureLoaded data-testid="doggo-skeleton" />
          </div>,
        );
        const doggo = getByTestId('doggo-skeleton');

        expect(doggo).toHaveStyle('display: none');
      });
    });

    describe('<FOFImageWrapper', () => {
      test('picture not loader', () => {
        const { getByTestId } = render(
          <div>
            <FOFImageWrapper doggoPictureLoaded={false} data-testid="doggo-wrapper" />
          </div>,
        );
        const doggo = getByTestId('doggo-wrapper');

        expect(doggo).toHaveStyle('display: none');
      });

      test('picture loaded', () => {
        const { getByTestId } = render(
          <div>
            <FOFImageWrapper doggoPictureLoaded data-testid="doggo-wrapper" />
          </div>,
        );
        const doggo = getByTestId('doggo-wrapper');

        expect(doggo).toHaveStyle('display: flex');
      });
    });
  });
});
