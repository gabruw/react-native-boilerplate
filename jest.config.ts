export default {
    clearMocks: true,
    maxWorkers: '50%',
    collectCoverage: true,
    coverageProvider: 'v8',
    preset: 'react-native',
    testEnvironment: 'node',
    cacheDirectory: '.jest/cache',
    testMatch: ['**/tests/**/*.ts?(x)'],
    coverageDirectory: '.jest/coverage',
    moduleDirectories: ['<rootDir>/src'],
    moduleFileExtensions: ['ts', 'tsx', 'js'],
    transform: {
        '^.+\\.ts?(x)$': 'ts-jest',
        '^.+\\.js$': '<rootDir>/node_modules/react-native/jest/preprocessor.js'
    },
    testPathIgnorePatterns: ['<rootDir>/node_modules/'],
    coveragePathIgnorePatterns: ['<rootDir>/node_modules/'],
    setupFiles: ['<rootDir>/node_modules/react-native/jest/setup.js']
};
