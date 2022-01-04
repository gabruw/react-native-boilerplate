//#region Imports

import { NetInfoSubscription } from '@react-native-community/netinfo';
import { ReactNode } from 'react';

//#endregion

export interface NetInfoContextProps {
    children?: ReactNode;
}

interface NetInfoContextState {
    unsubscribe: NetInfoSubscription;
}

export default NetInfoContextState;
