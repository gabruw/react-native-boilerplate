//#region Imports

import React, { useMemo } from 'react';
import { CountdownCircleTimer } from 'react-native-countdown-circle-timer';
import { IconButton } from 'react-native-paper';
import { useSnackbarDispatch, useSnackbarSelector } from 'storages/redux/hooks/snackbar';

//#endregion

const CountdownTimerSnackbar = () => {
    const { duration } = useSnackbarSelector();
    const { toggleSnackbar } = useSnackbarDispatch();

    const durationCircleTimer = useMemo(() => (duration || 7000) / 1000, [duration]);

    return (
        <CountdownCircleTimer
            isPlaying
            size={30}
            strokeWidth={3}
            trailColor='white'
            duration={durationCircleTimer}
            colors={[
                ['#007712', 0.3],
                ['#F7B801', 0.4],
                ['#A30000', 0.3]
            ]}
        >
            <IconButton icon='times' size={15} color='white' onPress={() => toggleSnackbar()} />
        </CountdownCircleTimer>
    );
};

export default CountdownTimerSnackbar;
1;
