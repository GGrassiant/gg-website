// Libs
import React from 'react';

// Utils
import { FOOTER_CTA_MESSAGES } from './constants';

// Helper to handle the undefined issue of Array.find
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

// Helper to validate footer CTA
export const validateObjectValues = (object: {
  [key: string]: string | React.FC | boolean | undefined;
}): boolean => Object.values(object)?.length > 0;

// Helper to get random value from an array
export const randomValueFromArray = (array: Array<any>): any =>
  array[Math.floor(Math.random() * array.length)];

// Random Footer CTA String
export const generateRandomFooterCta = (): string =>
  randomValueFromArray(FOOTER_CTA_MESSAGES);
