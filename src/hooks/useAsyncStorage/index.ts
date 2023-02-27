import AsyncStorage from "@react-native-async-storage/async-storage";

import { useSnackbarActions } from "@app/storages/system/hooks/snackbar/useSnackbarActions";

type AsyncStorageReturn = {
    get: <StorageValue>(key: string) => Promise<StorageValue | undefined>;
    set: <StorageValue>(key: string, value: StorageValue) => Promise<void>;
};

const useAsyncStorage = (): AsyncStorageReturn => {
    const { setSnackbarDispatch } = useSnackbarActions();

    const get = async <StorageValue>(key: string): Promise<StorageValue | undefined> => {
        try {
            const jsonValue = await AsyncStorage.getItem(key);
            return jsonValue && JSON.parse(jsonValue);
        } catch (e) {
            setSnackbarDispatch({
                type: "error",
                duration: 1500,
                description: "Error on get value from storage",
            });
        }
    };

    const set = async <StorageValue>(key: string, value: StorageValue): Promise<void> => {
        try {
            const jsonValue = JSON.stringify(value);
            await AsyncStorage.setItem(key, jsonValue);
        } catch (e) {
            setSnackbarDispatch({
                type: "error",
                duration: 1500,
                description: "Error on set value from storage",
            });
        }
    };

    return { get, set };
};

export { useAsyncStorage };
