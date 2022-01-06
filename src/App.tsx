//#region Imports

import FontAwesomeIcon from '@expo/vector-icons/FontAwesome5';
import { NavigationContainer } from '@react-navigation/native';
import AnimationBackdrop from 'components/AnimationBackdrop';
import CacheLoader from 'components/CacheLoader';
import Snackbar from 'components/Snackbar';
import { StatusBar } from 'expo-status-bar';
import React, { FC } from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import Router from 'router/navigators/StackNavigator';
import { NetInfoContextProvider } from 'storages/net-info';
import { useThemeSelector } from 'storages/redux/hooks/theme';

//#endregion

const App: FC = () => {
    const { paperTheme, navigationTheme, statusBarTheme } = useThemeSelector();

    return (
        <PaperProvider theme={paperTheme} settings={{ icon: (props) => <FontAwesomeIcon {...props} /> }}>
            <NavigationContainer theme={navigationTheme}>
                <CacheLoader>
                    <NetInfoContextProvider>
                        <StatusBar style={statusBarTheme} animated />

                        <AnimationBackdrop />
                        <Snackbar />

                        <Router />
                    </NetInfoContextProvider>
                </CacheLoader>
            </NavigationContainer>
        </PaperProvider>
    );
};

export default App;