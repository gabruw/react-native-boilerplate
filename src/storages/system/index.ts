import { configureStore } from "@reduxjs/toolkit";
import { persistStore } from "redux-persist";

import { reduxMiddlewares } from "@app/storages/system/middlewares";
import { languagePersistedReducer } from "@app/storages/system/persistors/language";
import { themePersistedReducer } from "@app/storages/system/persistors/theme";
import { loaderReducer } from "@app/storages/system/reducers/loader";
import { Reducers } from "@app/storages/system/reducers/reducers";
import { snackbarReducer } from "@app/storages/system/reducers/snackbar";

const store = configureStore({
    middleware: reduxMiddlewares,
    reducer: {
        [Reducers.THEME]: themePersistedReducer,
        [Reducers.LOADER]: loaderReducer.reducer,
        [Reducers.SNACKBAR]: snackbarReducer.reducer,
        [Reducers.LANGUAGE]: languagePersistedReducer,
    },
});

const persistor = persistStore(store);

export { store, persistor };
