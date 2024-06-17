import React, { useState, useEffect } from 'react';
import { Typography, Box } from '@mui/material';

interface CountdownTimerProps {
    initialSeconds: number;
}

const CountdownTimer = ({ initialSeconds }:{
    initialSeconds:number
}) => {
    const [seconds, setSeconds] = useState(initialSeconds);
    const [timerStarted, setTimerStarted] = useState(false);
    useEffect(() => {
        const timer = setInterval(() => {
            setSeconds((prevSeconds) => {
                if (prevSeconds > 0) {
                    return prevSeconds - 1;
                } else {
                    clearInterval(timer);
                    return 0;
                }
            });
            if (!timerStarted && initialSeconds - seconds >= 5) {
                setTimerStarted(true);
            }
        }, 1000);

        return () => clearInterval(timer);
    }, [initialSeconds, seconds, timerStarted]);

    const formatTime = (seconds: number) => {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    };

    return (
        <Box >
            <Box sx={{
                display: 'flex',
                fontSize: '36px',
                justifyContent: 'center',
                fontFamily:'auto'
            }}>
                Starting in {''}
                <Box sx={{ color: timerStarted ? 'red':'yellow', paddingLeft:'10px' }}>
                    {formatTime(seconds)}
                </Box>
            </Box>

        </Box>
    );
};

export default CountdownTimer;
