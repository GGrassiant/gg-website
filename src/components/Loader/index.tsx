// Libs
import React from 'react';

// Styles
import { LoaderWrapper, Loaderdot } from './loader-styles';

const Loader: React.FC = () => {
  return (
    <LoaderWrapper data-testid="custom-loader">
      <Loaderdot />
      <Loaderdot />
      <Loaderdot />
      <Loaderdot />
      <Loaderdot />
      <Loaderdot />
    </LoaderWrapper>
  );
};

export default Loader;
