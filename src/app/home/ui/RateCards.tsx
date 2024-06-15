import React from 'react';
import { Box, Typography } from '@mui/material';
import { Colors } from '@/app/theme/colors';

const   StatsCard = ({ number, text }:{
    number:string,
    text:string
}) => {
    return (
        <Box sx={{
            padding: { xs: 2, sm: 3 },
            textAlign: 'left', 
        }}>
            <Typography variant="body2" sx={{
                fontSize: { xs: '24px', sm: '36px', md: '40px' },
                color: Colors.text.secondary,
                fontFamily:'Basement Grotesque',
                lineHeight:'62px'
            }}>
                {number}
            </Typography>
            <Typography variant="body1" sx={{
                fontSize: { xs: '12px', sm: '16px', md: '18px' },
                color: '#EFEFEF',
                // textAlign:'left',
                fontWeight:'300'
            }}>
                {text}
            </Typography>
        </Box>
    );
};

export default StatsCard;

