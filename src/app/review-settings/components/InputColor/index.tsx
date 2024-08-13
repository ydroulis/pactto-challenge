import React from 'react';
import {
  Box,
  Checkbox,
  TextField,
  CheckboxProps,
  FormControlLabel,
  FormGroup,
  Slider,
  styled,
} from '@mui/material';
import * as S from './styles';

const CustomTextField = styled(TextField)({
  '& label.Mui-focused': {
    color: '#1DBBA5',
  },
  '& label': {
    color: '#68686A',
  },
  '& .MuiOutlinedInput-root': {
    color: '#E2E2E3',
    fontWeight: 500,
    '& fieldset': {
      borderColor: '#68686A',
    },
    '&:hover fieldset': {
      borderColor: '#DDDADA',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#1DBBA5',
    },
  },
});

interface IInputColorProps {
  id: string;
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputColor = ({ id, label, name, value, onChange }: IInputColorProps) => {
  return (
    <S.InputColor>
      <CustomTextField
        id={id}
        label={label}
        name={name}
        onChange={onChange}
        value={value}
        inputProps={{ maxLength: 7 }}
      />
      <S.Color color={value} />
    </S.InputColor>
  );
};

export default InputColor;
