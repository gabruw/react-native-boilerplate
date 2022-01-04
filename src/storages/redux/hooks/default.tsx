//#region Imports

import DispatchHookRedux from 'models/storages/redux/hooks/DispatchHookRedux';
import StateHookRedux from 'models/storages/redux/hooks/StateHookRedux';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

//#endregion

export const useDefaultDispatch = () => useDispatch<DispatchHookRedux>();

export const useDefaultSelector: TypedUseSelectorHook<StateHookRedux> = useSelector;
