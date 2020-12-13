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
  armfadebackground: {
    light:
      'linear-gradient(\n' +
      '            to top,\n' +
      '            rgba(255, 255, 255, 1),\n' +
      '            rgba(255, 255, 255, 1),\n' +
      '            rgba(255, 255, 255, 0.8),\n' +
      '            rgba(255, 255, 255, 0)\n' +
      '        )',
    dark:
      'linear-gradient(\n' +
      '            to top,\n' +
      '            rgba(47, 45, 45, 1),\n' +
      '            rgba(47, 45, 45, 1),\n' +
      '            rgba(47, 45, 45, 0.8),\n' +
      '            rgba(47, 45, 45, 0)\n' +
      '        )',
  },
};

export const breakPoints = {
  xsm: '325px',
  sm: '600px',
  md: '960px',
  lg: '1280px',
  xl: '1440px',
  SmallHeight: '668px',
  largeHeight: '1300px',
  largeBreakPointLimit: '1508px', // breakPoints.xl + theme.layout.layoutOffset + 0.25rem; TODO: Why + 0.25rem??? ¯\_(ツ)_/¯
};

export const theme = {
  fonts: {
    defaultFont: 'Rubik, sans-serif',
  },
  fontSizes: {
    xl: '8.5rem',
    veryLarge: '6.8rem',
    large: '4.5rem',
    medium: '3.2rem',
    mediumLight: '2.5rem',
    bigger: '1.8rem',
    cta: '1.5rem',
    normalAlt: '1.1rem',
    normal: '1rem',
    default: '0.8rem',
    small: '0.75rem',
  },
  fontWeight: {
    bold: '700',
    semiBold: '600',
    medium: '500',
    regular: '400',
    light: '300',
  },
  fontColor: {
    projectTextColor: '#282828',
    accentColor: '#e1e417',
  },
  transition: {
    default: '0.3s',
    medium: '0.6s',
  },
  layout: {
    headerHeight: '5rem',
    headerBorder: '1px',
    titleOffset: '6rem',
    offset: '4rem',
    projectGridGap: '2rem',
    projectGridPadding: '7rem',
    layoutOffset: '64px',
  },
  ratios: {
    iphone11AspectRatio: 'calc(812 / 375)',
  },
};

export const COLOR_MODE_KEY = 'color-mode';
export const INITIAL_COLOR_MODE_CSS_PROP = '--initial-color-mode';
