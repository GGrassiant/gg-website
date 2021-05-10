module.exports = {
  transform: {
    '^.+\\.[jt]sx?$': '<rootDir>/jest-preprocess.js',
  },
  moduleNameMapper: {
    '.+\\.(css|styl|less|sass|scss)$': 'identity-obj-proxy',
    '.+\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/__mocks__/file-mock.js',
    '^@reach/router(.*)': '<rootDir>/node_modules/@gatsbyjs/reach-router$1',
  },
  collectCoverageFrom: [
    'src/**/*.{js,ts,tsx,jsx}',
    '!src/**/*.types.tsx',
    '!src/**/*types.tsx',
    '!src/context/*',
    '!src/components/__tests__/utils/test-utils.js',
  ],
  testPathIgnorePatterns: [
    'node_modules',
    '\\.cache',
    '<rootDir>.*/public',
    'src/components/__tests__/utils/test-utils.js',
  ],
  transformIgnorePatterns: ['node_modules/(?!(gatsby-theme-i18n)/)'],
  globals: {
    __PATH_PREFIX__: '',
  },
  testURL: 'http://localhost',
  setupFiles: ['<rootDir>/loadershim.js', './setupJest.js'],
  setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],
  coverageThreshold: {
    global: {
      statements: 80,
      branches: 75,
      functions: 80,
      lines: 80,
    },
  },
  restoreMocks: true,
};
