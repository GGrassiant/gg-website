// Libs
import React from 'react';

// Utils
import { Edge, ContentfulDataGroup } from '../../site';

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
export const randomValueFromArray = <T, _>(array: Array<T>): T =>
  array[Math.floor(Math.random() * array.length)];

// Random Footer CTA String
const FOOTER_CTA_MESSAGES = ['get coffee', 'learn more about me', 'start project'];

export const generateRandomFooterCta = (): string => randomValueFromArray(FOOTER_CTA_MESSAGES);

// Get right values for the language
export const getLocalizedDataFromContentful: (
  arrayOfItems: ContentfulDataGroup,
  locale: string,
) => Array<Edge> = (arrayOfItems: ContentfulDataGroup, locale: string) =>
  ensure(arrayOfItems.find((item) => item.fieldValue === locale)).edges;
