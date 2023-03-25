import { useMemo } from "react";
import { Dimensions, StyleSheet } from "react-native";

import { usePaperTheme } from "@app/themes/hooks/usePaperTheme";

type FullScreenModalStylesReturn = {
    contentContainer: {
        borderRadius: number;
        paddingBottom: number;
        paddingHorizontal: number;
        backgroundColor: string;
        width: number;
    };
};

const dimensions = Dimensions.get("screen");

const useFullScreenModalStyles = (): FullScreenModalStylesReturn => {
    const theme = usePaperTheme();

    const styles = useMemo(
        () =>
            StyleSheet.create({
                contentContainer: {
                    borderRadius: 16,
                    paddingBottom: 32,
                    paddingHorizontal: 32,
                    backgroundColor: theme.colors.background,
                    width: dimensions.width - (dimensions.width * 20) / 100,
                },
            }),
        [theme, dimensions]
    );

    return styles;
};

export { useFullScreenModalStyles };
