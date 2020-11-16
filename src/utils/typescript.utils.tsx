// Helper to handle the undefined issue of Array.find
import React from 'react';

export const ensure = <T, _>(
  argument: T | undefined | null,
  message = 'This value was promised to be there.',
): T => {
  if (argument === undefined || argument === null) {
    throw new TypeError(message);
  }

  return argument;
};

// Helper to scroll to
export const scrollToRefObject = (ref: React.MutableRefObject<null>): void => {
  window.scrollTo({
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    top: ref?.current?.offsetTop,
    behavior: 'smooth',
  });
};
