// Needed to kick the dark/light mode from the start of the website without flickering
export const COLORS = {
  text: {
    light: '#fff', // white
    dark: '#2f2d2d', // gray
  },
  reversetext: {
    light: '#2f2d2d', // gray
    dark: '#fff', // white
  },
  reversetextwithopacity: {
    light: 'rgba(47, 45, 45, 0.9)',
    dark: 'rgba(255, 255, 255, 0.9)',
  },
  background: {
    light: '#fff', // white
    dark: '#2f2d2d', // gray
  },
  reversebackground: {
    light: '#2f2d2d', // gray
    dark: '#fff', // white
  },
  divider: {
    light: 'rgba(47, 45, 45, 0.2)', // gray with opacity
    dark: 'rgba(255, 255, 255, 0.2)', // white with opacity
  },
  borderlight: {
    light: 'rgba(47, 45, 45, 0.3)',
    dark: 'rgba(255, 255, 255, 0.3)',
  },
};

// For styled components
export const breakPoints = {
  breakPointXsm: '325px',
  breakPointSm: '600px',
  breakPointMd: '960px',
  breakPointLg: '1280px',
  breakPointXl: '1443px',
};

export const COLOR_MODE_KEY = 'color-mode';
export const INITIAL_COLOR_MODE_CSS_PROP = '--initial-color-mode';

export const SKILLS = [
  { id: 1, skill: 'HTML - CSS - SASS' },
  { id: 6, skill: 'ES6' },
  { id: 4, skill: 'React' },
  { id: 5, skill: 'Redux' },
  { id: 3, skill: 'Rails' },
  { id: 2, skill: 'Node' },
];
