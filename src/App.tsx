import { ReactElement } from "react";
import { Provider as PaperProvider } from "react-native-paper";
import Ionicons from "react-native-vector-icons/Ionicons";
import { PersistGate } from "redux-persist/integration/react";

import LoadingAnimation from "@app/assets/animations/loading.json";
import { AnimatedBackdrop } from "@app/components/AnimatedBackdrop";
import { ConnectionInfoModal } from "@app/components/ConnectionInfoModal";
import { Snackbar } from "@app/components/Snackbar";
import { SplashScreen } from "@app/components/SplashScreen";
import { StatusBar } from "@app/components/StatusBar";
import { Router } from "@app/router";
import { persistor } from "@app/storages/system";
import { TranslationsProvider } from "@app/storages/translations";
import { usePaperTheme } from "@app/themes/hooks/usePaperTheme";

const App = (): ReactElement => {
    const theme = usePaperTheme();

    return (
        <PaperProvider
            theme={theme}
            settings={{
                icon: (props) => <Ionicons {...props} />,
            }}
        >
            <PersistGate
                persistor={persistor}
                loading={<AnimatedBackdrop lottie={{ source: LoadingAnimation }} isVisible />}
            >
                <TranslationsProvider>
                    <SplashScreen>
                        <StatusBar />
                        <Router />

                        <Snackbar />
                        <ConnectionInfoModal />
                    </SplashScreen>
                </TranslationsProvider>
            </PersistGate>
        </PaperProvider>
    );
};

export { App };
