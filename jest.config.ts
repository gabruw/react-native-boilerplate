import { defaults } from 'ts-jest/presets';

export default {
    ...defaults,
    clearMocks: true,
    maxWorkers: '50%',
    collectCoverage: true,
    coverageProvider: 'v8',
    preset: 'react-native',
    testEnvironment: 'node',
    cacheDirectory: '.jest/cache',
    coverageDirectory: '.jest/coverage',
    moduleDirectories: ['<rootDir>/src'],
    testPathIgnorePatterns: ['<rootDir>/node_modules/'],
    coveragePathIgnorePatterns: ['<rootDir>/node_modules/']
};
