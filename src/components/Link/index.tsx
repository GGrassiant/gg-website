// Libs
import React from 'react';

// Utils
import { LinkProps } from './index-types';

// Styles
import { LinkWrapper } from './link-styles';

const Link: React.FC<LinkProps> = (props) => {
  const { children, href } = props;
  return (
    <LinkWrapper target="_blank" href={href} rel="noreferrer">
      {children}
    </LinkWrapper>
  );
};

export default Link;
