import React from 'react';
import {
  Checkbox,
  CheckboxProps,
  FormControlLabel,
  FormGroup,
  styled,
} from '@mui/material';
// import { Container } from './styles';

const BpIcon = styled('span')(() => ({
  borderRadius: 2,
  width: 16,
  height: 16,
  border: '2px solid #A7A7A8',
  backgroundColor: 'transparent',
  'input:disabled ~ &': {
    boxShadow: 'none',
    background: 'rgba(206,217,224,.5)',
  },
}));

const BpCheckedIcon = styled(BpIcon)({
  backgroundColor: '#1DBBA5',
  border: '2px solid #1DBBA5',
  backgroundImage:
    'linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))',
  '&::before': {
    display: 'block',
    width: 16,
    height: 16,
    backgroundImage:
      "url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath" +
      " fill-rule='evenodd' clip-rule='evenodd' d='M12 5c-.28 0-.53.11-.71.29L7 9.59l-2.29-2.3a1.003 " +
      "1.003 0 00-1.42 1.42l3 3c.18.18.43.29.71.29s.53-.11.71-.29l5-5A1.003 1.003 0 0012 5z' fill='%23000'/%3E%3C/svg%3E\")",
    content: '""',
  },
  'input:hover ~ &': {
    backgroundColor: '#1DBBA5',
  },
});

interface ICheckInputProps {
  checked: {
    logo: boolean;
    microphone: boolean;
    camera: boolean;
    muted: boolean;
    notes: boolean;
    zoom: boolean;
    swipe: boolean;
  };
  handleCheckedChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const CheckInput: React.FC<ICheckInputProps> = ({
  checked,
  handleCheckedChange,
}) => {
  function BpCheckbox(props: CheckboxProps) {
    return (
      <Checkbox
        sx={{
          '&:hover': { bgcolor: 'transparent' },
        }}
        disableRipple
        color="default"
        checkedIcon={<BpCheckedIcon />}
        icon={<BpIcon />}
        inputProps={{ 'aria-label': 'Checkbox demo' }}
        {...props}
      />
    );
  }

  return (
    <FormGroup sx={{ width: 360 }}>
      <FormControlLabel
        control={
          <BpCheckbox
            onChange={handleCheckedChange}
            checked={checked.logo}
            name="logo"
          />
        }
        label="Show logo"
      />
      <FormControlLabel
        control={
          <BpCheckbox
            onChange={handleCheckedChange}
            checked={checked.microphone}
            name="microphone"
          />
        }
        label="Start with microphone enabled"
      />
      <FormControlLabel
        control={
          <BpCheckbox
            onChange={handleCheckedChange}
            checked={checked.camera}
            name="camera"
          />
        }
        label="Start with camera enabled"
      />
      <FormControlLabel
        control={
          <BpCheckbox
            onChange={handleCheckedChange}
            checked={checked.muted}
            name="muted"
          />
        }
        label="Videos loaded start muted"
      />
      <FormControlLabel
        control={
          <BpCheckbox
            onChange={handleCheckedChange}
            checked={checked.notes}
            name="notes"
          />
        }
        label="Notes disappear after 1 second"
      />
      <FormControlLabel
        control={
          <BpCheckbox
            onChange={handleCheckedChange}
            checked={checked.zoom}
            name="zoom"
          />
        }
        label="Trackpad: pinch to zoom"
      />
      <FormControlLabel
        control={
          <BpCheckbox
            onChange={handleCheckedChange}
            checked={checked.swipe}
            name="swipe"
          />
        }
        label="Trackpad: reposition with 2-finger swipe"
      />
    </FormGroup>
  );
};

export default CheckInput;
