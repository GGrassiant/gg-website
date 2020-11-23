// Libs
import React from 'react';

// Utils
import { render } from './utils/test-utils';

// Components
import GetToKnowMe from '../CTA/footer-cta/GetToKnowMe';
import LetsConnect from '../CTA/footer-cta/LetsConnect';

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
});
