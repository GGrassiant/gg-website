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
