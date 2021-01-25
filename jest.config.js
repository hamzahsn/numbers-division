module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  rootDir: 'src',
  testMatch: [
    '<rootDir>/__tests__/**/*.{test,spec}.(ts|tsx|js|jsx)',
    '<rootDir>/**/*.{test,spec}.(ts|tsx|js|jsx)',
    '<rootDir>/**/**/*.{test,spec}.(ts|tsx|js|jsx)'
  ],
  coverageDirectory: '<rootDir>/__tests__/__coverage__/',
  moduleDirectories: ['node_modules', 'src'],
  collectCoverageFrom: ['<rootDir>/**/*.tsx', '<rootDir>/**/**/*.tsx', '!<rootDir>/index.tsx', '!<rootDir>/**/*.d.ts'],
  roots: ['<rootDir>'],
  transform: {
    '^.+\\.tsx?$': 'ts-jest'
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  setupFilesAfterEnv: ['<rootDir>/__tests__/config/importJestDOM.ts'],
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/__tests__/__mock__/fileMock.ts',
    '\\.(css|scss)$': '<rootDir>/__tests__/__mock__/styleMock.ts',
    '^@components(.*)$': '<rootDir>/components$1',
    '^@containers(.*)$': '<rootDir>/containers$1'
  }
}
