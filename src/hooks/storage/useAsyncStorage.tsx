//#region Imports

import AsyncStorage from '@react-native-async-storage/async-storage';
import { useCallback } from 'react';
import { useSnackbarDispatch } from 'storages/redux/hooks/snackbar';

//#endregion

interface AsyncStorageProps {
    getItem: <T>(key: string) => Promise<T | null>;
    setItem: <T>(key: string, value: T) => Promise<void>;
}

const useAsyncStorage = (): AsyncStorageProps => {
    const { setSnackbar } = useSnackbarDispatch();

    const getItem = useCallback(async <T,>(key: string): Promise<T | null> => {
        let storageValue: T | null = null;

        try {
            const value = await AsyncStorage.getItem(key);
            if (value) {
                storageValue = JSON.parse(value) as T;
            }
        } catch (e) {
            setSnackbar({ text: 'commons.async-storage.errors.get-item' });
        }

        return storageValue;
    }, []);

    const setItem = useCallback(async <T,>(key: string, value: T): Promise<void> => {
        try {
            const json = JSON.stringify(value);
            await AsyncStorage.setItem(key, json);
        } catch (e) {
            setSnackbar({ text: 'commons.async-storage.errors.set-item' });
        }
    }, []);

    return {
        getItem,
        setItem
    };
};

export default useAsyncStorage;
