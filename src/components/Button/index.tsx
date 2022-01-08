//#region Imports

import React, { ComponentProps, FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Omit } from 'react-native';
import { Button as PaperButton } from 'react-native-paper';
import TEST_ID from './tests/id.json';

//#endregion

interface ButtonCustomProps {
    isLoading?: boolean;
    isDisabled?: boolean;
}

type IntegratedButtonProps = ComponentProps<typeof PaperButton> & ButtonCustomProps;

type ButtonProps = Omit<IntegratedButtonProps, 'disabled' | 'loading'>;

const Button: FC<ButtonProps> = ({ children, mode = 'contained', isDisabled = false, isLoading = false, ...rest }) => {
    const { t } = useTranslation();

    return (
        <PaperButton
            data-testid={TEST_ID.button}
            {...rest}
            mode={mode}
            loading={isLoading}
            disabled={isDisabled || isLoading}
        >
            {t(String(children))}
        </PaperButton>
    );
};

export default Button;
