/** @type {import('@jest/types').Config.InitialOptions} */

module.exports = {
  globals: {
    'ts-jest': {
      tsConfig: 'tsconfig.spec.json',
    },
  },
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    '^@root(.*)$': '<rootDir>/src$1',
  },
  rootDir: '.',
  testMatch: ['<rootDir>/src/**/*.test.ts'],
  collectCoverageFrom: [
    '<rootDir>/src/**/*.ts',
    '!<rootDir>/src/**/*.d.ts',
    '!<rootDir>/src/**/*.spec.ts',
    '!<rootDir>/src/**/*.test.ts',
    '!<rootDir>/src/**/__*__/*',
  ],
  cacheDirectory: '<rootDir>/.cache/unit',
};
