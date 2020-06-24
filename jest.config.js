module.exports = {
  verbose: true,
  collectCoverage: true,
  cacheDirectory: ".cache",
  roots: ['<rootDir>/src/components'],
  // 这个属性是定义在每个测试文件运行之前，且在测试环境准备好后就会立即执行的文件或模块
  setupFilesAfterEnv: ["./tests/setupTests.ts"],
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
