import React from 'react';
import { Box, Card, CardContent, Typography, Avatar, styled, Container } from '@mui/material';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import { Colors } from '../theme/colors';
import Image from 'next/image';

// Custom styled components
const StyledCard = styled(Card)({
  position: 'absolute',
  top: 16,
  right: 16,
  borderRadius: 8,
  backgroundColor: '#061f30',
  color: '#fff',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  width: '25%',
  textAlign: 'left',
});

const StyledCardContent = styled(CardContent)({
  paddingTop:'17px',
  fontFamily: 'Basement Grotesque',

});

const StyledAvatar = styled(Avatar)({
  marginRight: 8
});

const AddressText = styled(Typography)({
  fontSize: 12,
  color: '#b0b0b0'
});

const ProfileCard = ({ name, address }: { name: string, address: string }) => {
  return (
    <StyledCard>
        <Typography variant='body2' sx={{
          fontWeight:'bold',
          paddingBottom:'2px',
          paddingTop:'10px',
          paddingLeft:'30px'
        }}>
          Connected as
        </Typography>
      <Container sx={{
        borderBottom: `2px solid ${Colors.text.secondary} `,
        display:'flex',

      }}>
      
        {/* <StyledAvatar src="/path-to-avatar.jpg" alt={name} /> */}
        <Box sx={{
          padding:'10px 2px'
        }}>
        <Image 
        src='/user.png'
        alt='alt'
        width={50}
        height={40}
        />
        </Box>
        
        <StyledCardContent>
          <Typography variant="body1" component="div">
            {name}
          </Typography>
          <AddressText variant="body2">
            {address}
          </AddressText>
        </StyledCardContent>
        <CheckCircleOutlineIcon style={{ color: 'green', marginLeft: 'auto', marginTop:'30px' }} />
      </Container>

    </StyledCard>
  );
};

export default ProfileCard;
