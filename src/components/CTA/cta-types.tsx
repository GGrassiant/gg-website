// libs
import React from 'react';

export interface CTAProps {
  children: string | Array<string | React.ReactElement>;
  size?: string;
  theme?: string;
  link?: string;
}
