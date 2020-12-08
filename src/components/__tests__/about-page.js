// Libs
import React from 'react';

// Utils
import { render, fireEvent } from './utils/test-utils';

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
      global.scrollTo = jest.fn();
      const { getByTestId } = render(<AboutPageComponent data={data} />);
      fireEvent(
        getByTestId('custom-scroll-element'),
        new MouseEvent('click', {
          bubbles: true,
          cancelable: true,
        }),
      );
      expect(window.scrollTo).toBeCalledWith({ behavior: 'smooth', top: 0 });
    });
  });
});
