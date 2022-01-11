//#region Imports

import mockAsyncStorage from '@react-native-async-storage/async-storage/jest/async-storage-mock';
import { render, RenderOptions } from '@testing-library/react-native';
import { ReactElement } from 'react';
import TestProviders from './components/TestProviders';

//#endregion

jest.mock('@react-native-async-storage/async-storage', () => mockAsyncStorage);
jest.mock('../../../node_modules/react-native/Libraries/Animated/NativeAnimatedHelper.js');

const renderWithProviders = (ui: ReactElement, options?: Omit<RenderOptions, 'wrapper'>) =>
    render(ui, { wrapper: TestProviders, ...options });

export * from '@testing-library/react-native';
export { renderWithProviders as render };
