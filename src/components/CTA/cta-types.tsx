// libs
import React from 'react';

// Utils
import { menuItems } from '../../../site';

type MenuItemCTA = typeof menuItems[number];

export interface CTAProps {
  children: string | Array<string | React.ReactElement>;
  link?: MenuItemCTA;
  onClick?: () => void;
}
