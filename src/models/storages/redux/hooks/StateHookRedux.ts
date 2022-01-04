//#region Imports

import store from 'storages/redux/store';

//#endregion

type StateHookRedux = ReturnType<typeof store.getState>;

export default StateHookRedux;
