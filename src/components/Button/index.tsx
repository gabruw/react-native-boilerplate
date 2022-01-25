//#region Imports

import ButtonProps from 'models/components/Button';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Button as PaperButton } from 'react-native-paper';
import TEST_ID from './tests/id.json';

//#endregion

const Button = ({ children, mode = 'contained', isDisabled = false, isLoading = false, ...rest }: ButtonProps) => {
    const { t } = useTranslation();

    return (
        <PaperButton
            testID={TEST_ID.button}
            mode={mode}
            loading={isLoading}
            disabled={isDisabled || isLoading}
            {...rest}
        >
            {t(String(children))}
        </PaperButton>
    );
};

export default Button;
