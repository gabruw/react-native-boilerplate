//#region Imports

import NetInfo from '@react-native-community/netinfo';
import NetInfoModal from 'components/NetInfoModal';
import { ModalRefProps } from 'models/components/Modal';
import NetInfoContextState, { NetInfoContextProps } from 'models/storages/net-info/NetInfoContextProps';
import React, { createContext, FC, useContext, useRef } from 'react';

//#endregion

const NetInfoContext = createContext<NetInfoContextState>({} as NetInfoContextState);

export const NetInfoContextProvider: FC<NetInfoContextProps> = ({ children }) => {
    const modalRef = useRef<ModalRefProps>(null);

    const unsubscribe = NetInfo.addEventListener((state) => {
        if (!state.isConnected) {
            console.log('Not connected D:');
        }
    });

    return (
        <NetInfoContext.Provider value={{ unsubscribe }}>
            {children}
            <NetInfoModal ref={modalRef} />
        </NetInfoContext.Provider>
    );
};

const useNetInfoContext = () => useContext(NetInfoContext);

export default useNetInfoContext;
