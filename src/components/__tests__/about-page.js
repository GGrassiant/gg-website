// Libs
import React from 'react';

// Utils
import { render, getAllByTestId, fireEvent } from './utils/test-utils';

// Components
import AboutPageComponent from '../Pages/AboutPagecomponent';

describe('<AboutPageComponent />', () => {
  describe('mounts', () => {
    test('page mounts', () => {
      const data = {
        allContentfulDescription: {
          group: [{ fieldValue: 'en', edges: [{ node: { content: 'lol' } }] }],
        },
        allContentfulAsset: {
          edges: [{ node: { id: 'resume', file: { url: 'url-resume' } } }],
        },
      };
      const { container } = render(<AboutPageComponent data={data} />);
      expect(container).toBeInTheDocument();
    });
  });

  describe('scrollto', () => {
    test('scrollto', () => {
      const data = {
        allContentfulDescription: {
          group: [{ fieldValue: 'en', edges: [{ node: { content: 'lol' } }] }],
        },
        allContentfulAsset: {
          edges: [{ node: { id: 'resume', file: { url: 'url-resume' } } }],
        },
      };
      const mockScroll = jest.fn();
      window.scrollTo = mockScroll;
      const { container } = render(<AboutPageComponent data={data} />);
      fireEvent(
        getAllByTestId(container, 'custom-element')[0],
        new MouseEvent('click', {
          bubbles: true,
          cancelable: true,
        }),
      );
      expect(mockScroll).toHaveBeenCalledTimes(1);
    });
  });
});
