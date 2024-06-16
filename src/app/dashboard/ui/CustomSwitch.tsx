import React from 'react';
import { styled } from '@mui/material/styles';
import Switch, { SwitchProps } from '@mui/material/Switch';
import { BsSun, BsMoon } from 'react-icons/bs';


const CustomSwitch = styled((props: SwitchProps) => (
  <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
))(({ theme }) => ({
  width: 90,
  height: 44,
  margin:'20px 10px',
  padding: 7,
  '& .MuiSwitch-switchBase': {
    margin: 10,
    padding: 0,
    transform: 'translateX(7px)',
    '&.Mui-checked': {
      color: 'red',
      backgroundColor:'red',
      padding:8,

      transform: 'translateX(40px)',
      '& .MuiSwitch-thumb:before': {
        content: '""',
        position: 'absolute',
        width: '100%',
        height: '100%',
        left: 0,
        top: 0,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" fill="${encodeURIComponent(
          '#ffeb3b'
        )}" viewBox="0 0 16 16"><path d="M8 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8z"/></svg>')`,
      },
      '& + .MuiSwitch-track': {
        opacity: 1,
        backgroundColor: theme.palette.mode === 'dark' ? '#8796A5' : '#aab4be',
      },
    },
  },
  '& .MuiSwitch-thumb': {
    backgroundColor: theme.palette.mode === 'dark' ? '#003892' : '#001e3c',
    width: 32,
    height: 32,
    '&:before': {
      content: '""',
      position: 'absolute',
      width: '100%',
      height: '100%',
      left: 0,
      top: 0,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" fill="${encodeURIComponent(
        '#ffeb3b'
      )}" viewBox="0 0 16 16"><path d="M8 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8z"/></svg>')`,
    },
  },
  '& .MuiSwitch-track': {
    opacity: 1,
    backgroundColor: theme.palette.mode === 'dark' ? '#8796A5' : '#aab4be',
    borderRadius: 20 / 2,
  },
}));

const SunMoonSwitch: React.FC<SwitchProps> = (props) => {
  return  <CustomSwitch
  icon={<BsSun style={{ color: '#ffeb3b', fontSize: '20px' }} />}
  checkedIcon={<BsMoon style={{ color: '#ffeb3b', fontSize: '20px' }} />}
  {...props}
/>;
};

export default SunMoonSwitch;
