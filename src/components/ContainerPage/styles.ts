//#region Imports

import { useMemo } from 'react';
import { StyleSheet } from 'react-native';
import MARGIN from 'utils/styles/margin';
import SHEET from 'utils/styles/sheet';

//#endregion

interface ContainerPageStylesProps {
    hasHeader?: boolean;
}

const useContainerPageStyles = ({ hasHeader = false }: ContainerPageStylesProps) => {
    const sheet = useMemo(() => (hasHeader ? SHEET.CONTAINER_WITH_HEADER : SHEET.CONTAINER), [hasHeader]);

    return StyleSheet.create({
        scrollView: {
            ...sheet
        },
        content: {
            ...MARGIN.CONTAINER
        }
    });
};

export default useContainerPageStyles;
