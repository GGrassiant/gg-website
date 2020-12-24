// Libs
import React from 'react';

// Utils
import { render } from './utils/test-utils';
import { EDGE_RANDOM_PROJECT } from './project-card';

// Components
import GetToKnowMe from '../CTA/footer-cta/GetToKnowMe';
import LetsConnect from '../CTA/footer-cta/LetsConnect';
import NextProject from '../CTA/footer-cta/NextProject';
import ProjectPageComponent from '../Pages/ProjectPageComponent';

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
      test('Layout mounts correctly', () => {
        const { container, getByTestId, queryByTestId } = render(
          <NextProject />,
        );
        const loadingElement = getByTestId('custom-loader');
        const CardWrapper = queryByTestId('simplifiedCardLink');

        expect(container).toBeInTheDocument();
        expect(loadingElement).toBeInTheDocument();
        expect(CardWrapper).toBeNull();
      });

      test('Layout mounts with data', () => {
        const data = {
          contentfulProject: EDGE_RANDOM_PROJECT.node,
        };
        const { container, getByTestId, queryByTestId } = render(
          <ProjectPageComponent data={data} />,
        );
        const CardWrapper = getByTestId('simplifiedCardLink');
        const loadingElement = queryByTestId('custom-loader');

        expect(container).toBeInTheDocument();
        expect(CardWrapper).toBeInTheDocument();
        expect(loadingElement).toBeNull();
      });
    });
  });
});
