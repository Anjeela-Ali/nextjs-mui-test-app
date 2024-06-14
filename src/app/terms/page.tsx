// components/TermsAndConditions.js
'use client'
import React, { useState } from 'react';
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
import MainButton from '../components/MainButton';
import { Router } from 'next/router';
import { useRouter } from 'next/navigation';

const TermsAndConditions = () => {
    const router = useRouter();
  const [open, setOpen] = useState(true);
  const [checkedTerms, setCheckedTerms] = useState(false);
  const [checkedPrivacy, setCheckedPrivacy] = useState(false);

  const handleCheckboxChangeTerms = (event:any) => {
    setCheckedTerms(event.target.checked);
  };

  const handleCheckboxChangePrivacy = (event:any) => {
    setCheckedPrivacy(event.target.checked);
  };

  const handleClose = () => {
    if (checkedTerms && checkedPrivacy) {
        setOpen(false);
        // Navigate to another page
        router.push('/home');
      } else {
        alert('Please accept the terms and conditions to proceed.');
      }
  };


  return (
    <Dialog open={open} maxWidth="md" fullWidth>
      <DialogTitle>
        <Typography variant="h5" align="center">
          Terms & Conditions
        </Typography>
      </DialogTitle>
      <DialogContent>
        <Container>
          <Box sx={{ my: 2 }}>
            <Typography variant="body1" paragraph>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, pulvinar facilisis justo mollis, auctor consequat urna.
            </Typography>
            <Typography variant="body1" paragraph>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, pulvinar facilisis justo mollis, auctor consequat urna.
            </Typography>
            <FormControlLabel
              control={
                <Checkbox
                  checked={checkedTerms}
                  onChange={handleCheckboxChangeTerms}
                  name="termsCheckbox"
                  color="primary"
                />
              }
              label="I agree to the Terms of Use and License Terms."
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={checkedPrivacy}
                  onChange={handleCheckboxChangePrivacy}
                  name="privacyCheckbox"
                  color="primary"
                />
              }
              label="I agree to the Privacy Policy."
            />
          </Box>
        </Container>
      </DialogContent>
      <DialogActions>
       <MainButton title='Continue' onButtonClick={handleClose} disabled={!checkedTerms || !checkedPrivacy}/>
      </DialogActions>
    </Dialog>
  );
};

export default TermsAndConditions;
