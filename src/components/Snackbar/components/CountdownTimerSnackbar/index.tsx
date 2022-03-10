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
            trailColor='#FFFFFF'
            duration={durationCircleTimer}
            colors={['#007712', '#F7B801', '#A30000']}
            colorsTime={[durationCircleTimer / 2, durationCircleTimer / 3, 0]}
        >
            {() => <IconButton icon='times' size={15} color='white' onPress={() => toggleSnackbar()} />}
        </CountdownCircleTimer>
    );
};

export default CountdownTimerSnackbar;
1;
