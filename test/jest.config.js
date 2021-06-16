module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  verbose: true,
  setupFilesAfterEnv: ['<rootDir>/test/jest.setup.postenv.js'],
  testPathIgnorePatterns: ['./.next/', './node_modules/'],
  transformIgnorePatterns: ['./.next/', './node_modules/'],
  modulePaths: ['<rootDir>'],
  rootDir: '../',
  testURL: 'http://lick-rick-and-morty.com',
  globals: {
    'ts-jest': {
      tsconfig: '<rootDir>/tsconfig.test.json',
    },
  },
};
