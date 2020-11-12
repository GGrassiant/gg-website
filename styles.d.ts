// For SCSS modules
declare module '*.module.scss' {
  const classes: { [key: string]: string };
  export default classes;
}

// For SCSS imports in JS
declare module '*.scss';

// For SVG
declare module '*.svg';
