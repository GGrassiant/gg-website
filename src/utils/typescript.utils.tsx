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

// For styled components
export const breakPoints = {
  breakPointSm: '600px',
  breakPointMd: '960px',
  breakPointLg: '1280px',
  breakPointXl: '1440px',
  breakPointMediumHeight: '700px',
};
