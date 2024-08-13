import { FormControlLabel, FormGroup, styled } from '@mui/material';
import Switch from '@mui/material/Switch';
import React, { ChangeEvent } from 'react';

interface ISwitchButtonProps {
  checked: boolean;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const SwitchButton: React.FC<ISwitchButtonProps> = ({ checked, onChange }) => {
  const MaterialUISwitch = styled(Switch)(() => ({
    width: 62,
    height: 34,
    padding: 7,
    '& .MuiSwitch-switchBase': {
      margin: 1,
      padding: 0,
      transform: 'translateX(6px)',
      '&.Mui-checked': {
        color: '#fff',
        transform: 'translateX(22px)',
        '& .MuiSwitch-thumb:before': {
          backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 24 24"><path fill="${'gray13'}" d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"/></svg>')`,
        },
        '& + .MuiSwitch-track': {
          opacity: 1,
          backgroundColor: '#1AB39D',
        },
        '& .MuiSwitch-thumb': {
          backgroundColor: '#61cfc0',
        },
      },
    },
    '& .MuiSwitch-thumb': {
      backgroundColor: '#9e9e9e',
      width: 22,
      height: 22,
      marginTop: 2,
      '&::before': {
        content: "''",
        position: 'absolute',
        width: '100%',
        height: '100%',
        left: 0,
        top: 1,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 24 24"><path fill="${'gray13'}" d="M19,13H5V11H19V13Z" /></svg>')`,
      },
    },
    '& .MuiSwitch-track': {
      width: 38,
      height: 14,
      opacity: 1,
      backgroundColor: '#616161DE',
      borderRadius: 20 / 2,
    },
  }));

  return (
    <FormGroup>
      <FormControlLabel
        control={
          <MaterialUISwitch
            sx={{ m: 1 }}
            size="small"
            checked={checked}
            onChange={onChange}
            name="switch"
          />
        }
        label=""
      />
    </FormGroup>
  );
};

export default SwitchButton;
