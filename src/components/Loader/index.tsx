// Libs
import React from 'react';

// Styles
import { LoaderWrapper, LoaderDot } from './loader-styles';

const Loader: React.FC = () => {
  return (
    <LoaderWrapper data-testid="custom-loader">
      <LoaderDot />
      <LoaderDot />
      <LoaderDot />
      <LoaderDot />
      <LoaderDot />
      <LoaderDot />
    </LoaderWrapper>
  );
};

export default Loader;
