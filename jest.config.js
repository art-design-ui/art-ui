module.exports = {
  verbose: true,
  cacheDirectory: './',
  collectCoverage: false,
  roots: ['<rootDir>/src/components'],
  transform: {
    '^.+\\.ts?x?$': 'ts-jest',
  },
  testPathIgnorePatterns: [
    '<rootDir>/node_modules/',
    '<rootDir>/lib/',
    '<rootDir>/dist/',
    '<rootDir>/es/',
  ],
  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx'],
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.(ts|tsx|js)?$',
}
