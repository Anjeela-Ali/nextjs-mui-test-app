import React from 'react';
import { Box, Card, CardContent, Typography, Avatar } from '@mui/material';

const ProfileCard = ( {name} : any) => {
  return (
    <Card sx={{ display: 'flex', alignItems: 'center', padding: 2, position: 'absolute', top: 16, right: 16 }}>
      <Avatar sx={{ marginRight: 2 }}>P</Avatar>
      <CardContent>
        <Typography variant="h6">{name}</Typography>
        <Typography variant="body2" color="textSecondary">Profile</Typography>
      </CardContent>
    </Card>
  );
};

export default ProfileCard;