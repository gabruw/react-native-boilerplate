//#region Imports

import React, { FC, Fragment } from 'react';
import { useTranslation } from 'react-i18next';
import { Text } from 'react-native-paper';
import { useSnackbarSelector } from 'storages/redux/hooks/snackbar';
import useTextSnackbarStyles from './styles';

//#endregion

const TextSnackbar: FC = () => {
    const { t } = useTranslation();
    const styles = useTextSnackbarStyles();

    const { text } = useSnackbarSelector();

    return (
        <Fragment>
            {text.map((value, index) => (
                <Text key={index} style={styles.text}>
                    {t(value)}
                </Text>
            ))}
        </Fragment>
    );
};

export default TextSnackbar;
