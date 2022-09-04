import { useEffect, useState } from 'react';

type Props = {
    isTimerReset: boolean,
    isTimerStarted: boolean,
    setIsTimerStarted: (value: boolean) => void
}

const useTimer = ({ isTimerStarted, isTimerReset, setIsTimerStarted }: Props) => {
    const [minutes, setMinutes] = useState<number>(0);
    const [seconds, setSeconds] = useState<number>(0);
    const [milliseconds, setMilliseconds] = useState<number>(0);
    
    useEffect(() => {
        const interval = setInterval(() => {
            if (isTimerReset) {
                clearInterval(interval);
                setIsTimerStarted(false);
                setMinutes(0);
                setSeconds(0);
                setMilliseconds(0);
                return;
            }
            if(!isTimerStarted) {
                clearInterval(interval);
                return;
            }
            if (milliseconds > 59) {
                setSeconds(seconds + 1);
                setMilliseconds(0)
                return;
            }
            if (seconds > 59) {
                setMinutes(minutes + 1);
                setSeconds(0)
                return;
            }
            setMilliseconds(milliseconds + 1);
        }, 10);
        return () => clearInterval(interval);
    });

    return { minutes, seconds, milliseconds };
}

export default useTimer;