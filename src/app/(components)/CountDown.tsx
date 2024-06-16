import React, { useState, useEffect } from 'react';
import { Typography, Box } from '@mui/material';

interface CountdownTimerProps {
    initialSeconds: number;
}

const CountdownTimer: React.FC<CountdownTimerProps> = ({ initialSeconds }) => {
    const [seconds, setSeconds] = useState(initialSeconds);

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
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    const formatTime = (seconds: number) => {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    };

    return (
        <Box >
            <Box sx={{
                display: 'flex',
                fontSize: '34px',
                justifyContent: 'center'
            }}>
                Starting in {''}
                <Box sx={{ color: '#ffeb3b', paddingLeft:'10px' }}>
                    {formatTime(seconds)}
                </Box>
            </Box>

        </Box>
    );
};

export default CountdownTimer;
