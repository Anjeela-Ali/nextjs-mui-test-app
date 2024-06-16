// components/TermsAndConditions.js
'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import {
  Box,
  Container,
  Typography,
  Checkbox,
  FormControlLabel,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions
} from '@mui/material';
import MainButton from '../(components)/MainButton';
import { Router } from 'next/router';
import { useRouter } from 'next/navigation';
import { useTerms } from '@/context/TermsContext';
import { Colors } from '../theme/colors';

const TermsAndConditions = () => {
  const router = useRouter();
  const [open, setOpen] = useState(true);
  const [checkedTerms, setCheckedTerms] = useState(false);
  const [checkedPrivacy, setCheckedPrivacy] = useState(false);
  const { setTermsAccepted } = useTerms()

  const handleCheckboxChangeTerms = (event: any) => {
    setCheckedTerms(event.target.checked);
  };

  const handleCheckboxChangePrivacy = (event: any) => {
    setCheckedPrivacy(event.target.checked);
  };

  const handleClose = () => {
    if (checkedTerms && checkedPrivacy) {
      setTermsAccepted(true);
      setOpen(false);
      // Navigate to another page
      router.push('/home');
    } else {
      alert('Please accept the terms and conditions to proceed.');
    }
  };
  return (
    <Box sx={{

    }}>
      <Dialog open={open} maxWidth="lg" fullWidth  >
        <Box sx={{
          borderRadius: '30px',
          backgroundColor: '#061F30'
        }}>
          <DialogTitle sx={{
            alignItems: 'center',
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
          }}>
            <Image
              src="/logo.png"
              alt="Picture of the author"
              width={125}
              height={101}
              quality={100}
            />
            <Typography variant="h4" sx={{
              color: 'text.primary',
              fontFamily: 'Basement Grotesque',
              fontWeight: '700',
              fontSize: '28px',
              lineHeight: '48px'
            }}>
              Terms & Conditions
            </Typography>
            <Typography variant='body2' sx={{
              fontSize: '16px',
              fontWeight: '400',
              lineHeight: '28px',
            }}>
              You agree to our Terms of Use and License Terms.
            </Typography>
          </DialogTitle>
          <DialogContent>
            <Container>
              <Box sx={{ my: 2 }}>
                <Container sx={{
                  border: '1px solid gray',
                  borderRadius: '12px',
                  padding: '10px 2px'
                }}>
                  <Typography variant="body1" paragraph sx={{
                    color: Colors.text.light,
                    fontWeight: 'light'
                  }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, pulvinar facilisis justo mollis, auctor consequat urna.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, pulvinar facilisis justo mollis, auctor consequat urna.

                  </Typography>
                  <Typography sx={{
                    fontWeight: 'bold'
                  }}>Title Here:</Typography>
                  <Typography variant="body1" paragraph sx={{
                    color: Colors.text.light,
                    fontWeight: 'light'
                  }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, pulvinar facilisis justo mollis, auctor consequat urna.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, pulvinar facilisis justo mollis, auctor consequat urna.

                  </Typography>
                  <Typography sx={{
                    fontWeight: 'bold'
                  }}>Title Here:</Typography>
                  <Typography variant="body1" paragraph sx={{
                    color: Colors.text.light,

                    fontWeight: 'light'
                  }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, pulvinar facilisis justo mollis, auctor consequat urna.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, pulvinar facilisis justo mollis, auctor consequat urna.

                  </Typography>
                  <Typography sx={{
                    fontWeight: 'bold'
                  }}>Title Here:</Typography>
                </Container>

                <Container sx={{
                  margin: '15px auto',
                  backgroundColor: '#031622',
                  borderRadius: '15px',
                  display: 'flex',
                  flexDirection: 'column',
                  // padding:'10px 60px'

                  color: Colors.text.light

                }}>
                  <Box sx={{
                    paddingLeft: '30px',
                    margin: '10px 0'
                  }}>
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={checkedTerms}
                          onChange={handleCheckboxChangeTerms}
                          name="termsCheckbox"
                          color="warning"
                          sx={{ marginBottom: '20px', fontSize: '16px', fontWeight: '300' }}
                        />
                      }
                      label="You agree to our Terms of Use and License Terms. In our Privacy Policy, we explain how we process your personal data and what rights you have."
                    />
                  </Box>
                  <Box sx={{
                    paddingLeft: '30px',
                    margin: '10px 0',
                  }}>
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={checkedPrivacy}
                          onChange={handleCheckboxChangePrivacy}
                          name="privacyCheckbox"
                          color="warning"
                          sx={{ marginBottom: '20px', fontSize: '16px', fontWeight: '300' }}
                        />
                      }
                      label="You agree to our Terms of Use and License Terms. In our Privacy Policy, we explain how we process your personal data and what rights you have."
                    />
                  </Box>


                </Container>

              </Box>
            </Container>
          </DialogContent>

          <DialogActions sx={{
            justifyContent:'center',
            margin:'15px auto'
          }}>
            <MainButton title='Continue' onButtonClick={handleClose} disabled={!checkedTerms || !checkedPrivacy} />
          </DialogActions>
        </Box>

      </Dialog>
    </Box>

  );
};

export default TermsAndConditions;
