import { ReactElement } from "react";
import { Button } from "react-native-paper";

import { PageContainer } from "@app/components/PageContainer";
import { StackRoutes } from "@app/router/constants/routes";
import { useStackNavigation } from "@app/router/hooks/useStackNavigation";
import { useSnackbarActions } from "@app/storages/system/hooks/snackbar/useSnackbarActions";
import { useThemeActions } from "@app/storages/system/hooks/theme/useThemeActions";

const Welcome = (): ReactElement => {
    const { navigate } = useStackNavigation();
    const { toggleThemeDispatch } = useThemeActions();
    const { setSnackbarDispatch } = useSnackbarActions();

    return (
        <PageContainer>
            <Button mode="contained" onPress={() => navigate(StackRoutes.SignIn)}>
                Sign in
            </Button>

            <Button mode="outlined" onPress={() => navigate(StackRoutes.SignUp)}>
                Sign up
            </Button>

            <Button mode="text" onPress={() => navigate(StackRoutes.Guest)}>
                Continue as guest
            </Button>

            <Button mode="contained" onPress={() => toggleThemeDispatch()}>
                Change theme
            </Button>

            <Button
                mode="contained"
                onPress={() =>
                    setSnackbarDispatch({
                        type: "error",
                        duration: 2000,
                        description: "Hello",
                    })
                }
            >
                Snackbar
            </Button>
        </PageContainer>
    );
};

export { Welcome };
