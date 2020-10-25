// Libs
import React from 'react';

export interface LinkProps {
  children: string | Array<string | React.ReactElement>;
  theme: string;
  href: string;
}
