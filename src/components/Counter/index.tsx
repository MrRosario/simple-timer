import React, { FC } from "react";
import { View, Text, StyleSheet } from 'react-native';
import useTimer from '../../hooks/useTimer';

type Props = {
    isTimerReset: boolean,
    isTimerStarted: boolean,
    setIsTimerStarted: (value: boolean) => void
}

export const Counter: FC<Props> = ({isTimerReset, isTimerStarted, setIsTimerStarted}) => {

    const { minutes, seconds, milliseconds } = useTimer({isTimerReset, isTimerStarted, setIsTimerStarted});
    
    const CURRENT_MIN = minutes < 10 ? `0${minutes}` : minutes;
    const CURRENT_SEC = seconds < 10 ? `0${seconds}` : seconds;
    const CURRENT_MS = milliseconds < 10 ? `0${milliseconds}` : milliseconds;

    return (
        <View style={styles.counterWrapper}>
            <Text style={styles.textNumber}>{CURRENT_MIN}</Text>
            <Text style={styles.textNumber}>:</Text>
            <View style={{ flexDirection: 'row' }}>
                <Text style={[styles.textNumber, {width: 110}]}>{CURRENT_SEC},</Text>
                <Text style={[styles.textNumber, {width: 90} ]}>{CURRENT_MS}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    counterWrapper: {
        flexDirection: 'row',
        alignSelf: 'center'
    },
    textNumber: {
        color: '#fff',
        fontSize: 70,
        textAlign: 'right',
        fontFamily: 'Inter-Regular',
    },
});