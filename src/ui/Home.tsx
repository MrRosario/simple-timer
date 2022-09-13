import React, { useState } from "react";
import { View, StyleSheet } from 'react-native';
import { Counter } from '../components/Counter';
import { RoundedButton } from '../components/RoundedButton';

export const HomeScreen = () => {
    const [isTimerReset, setIsTimerReset] = useState<boolean>(false);
    const [isTimerStarted, setIsTimerStarted] = useState<boolean>(false);

    return (
        <View style={styles.container}>
            <View>
                <Counter 
                    isTimerReset={isTimerReset} 
                    isTimerStarted={isTimerStarted}
                    setIsTimerStarted={setIsTimerStarted}
                />
            </View>
            <View style={styles.buttonsWrapper}>
                <RoundedButton 
                    isStartButton={false} 
                    isTimerReset={isTimerReset}
                    setIsTimerReset={setIsTimerReset}
                    isTimerStarted={isTimerStarted}
                    setIsTimerStarted={setIsTimerStarted}
                />
                <RoundedButton 
                    isStartButton={true} 
                    isTimerReset={isTimerReset}
                    setIsTimerReset={setIsTimerReset}
                    isTimerStarted={isTimerStarted}
                    setIsTimerStarted={setIsTimerStarted}
                />
            </View>

            <View  style={styles.lineBreak} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: '100%',
        width: '100%',
        backgroundColor: '#000000',
        paddingTop: 150,
        paddingHorizontal: 16
    },
    text: {
        color: '#fff'
    },
    buttonsWrapper: {
        flexDirection: "row",
        justifyContent: 'space-between',
        marginTop: 100
    },
    lineBreak: {
        marginTop: 15,
        width: '100%',
        height: 1,
        backgroundColor: '#333'
    }
});