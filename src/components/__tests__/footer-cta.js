// Libs
import React from 'react';

// Utils
import { render } from './utils/test-utils';

// Components
import GetToKnowMe from '../CTA/footer-cta/GetToKnowMe';
import LetsConnect from '../CTA/footer-cta/LetsConnect';
import NextProject from '../CTA/footer-cta/NextProject';

describe('<FooterCta>', () => {
  describe('<LetsConnect />', () => {
    describe('mounts', () => {
      test('Layout mounts correctly', () => {
        const { container } = render(<LetsConnect />);

        expect(container).toBeInTheDocument();
      });
    });
  });

  describe('<GetToKnowMe />', () => {
    describe('mounts', () => {
      test('Layout mounts correctly', () => {
        const { container } = render(<GetToKnowMe />);

        expect(container).toBeInTheDocument();
      });
    });
  });

  describe('<NextProject />', () => {
    describe('mounts', () => {
      test('Layout mounts correctly', async () => {
        const { container, getByTestId } = render(<NextProject />);
        const loadingElement = await getByTestId('custom-loader');

        expect(container).toBeInTheDocument();
        expect(loadingElement).toBeInTheDocument();
      });
    });
  });
});
