import {
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
} from '@mui/material';
import React, { ChangeEvent } from 'react';
import { IRadioOptions } from '../../types';

interface IInputRadioProps {
  value: string;
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
  name: 'reviewType' | 'reviewFileType';
  options: IRadioOptions;
}

const InputRadio: React.FC<IInputRadioProps> = ({
  value,
  handleChange,
  name,
  options,
}) => {
  const selectedOptionsGroup = options[name];

  return (
    <FormControl>
      <RadioGroup
        row={selectedOptionsGroup.row}
        aria-labelledby={name}
        name={name}
        value={value}
        onChange={handleChange}
        sx={selectedOptionsGroup.style}
      >
        {selectedOptionsGroup.options.map((option, i) => {
          return option.style ? (
            <FormControlLabel
              key={i}
              disabled={option.disabled}
              className={option.className}
              style={option.style}
              control={
                <Radio
                  value={option.value}
                  sx={{
                    color: '#707070',
                    '&.Mui-checked': {
                      color: '#1DBBA5',
                    },
                    '&.Mui-disabled': {
                      color: '#FFFFFF80',
                    },
                  }}
                />
              }
              label={option.label}
            />
          ) : (
            <FormControlLabel
              disabled={option.disabled}
              className={option.className}
              control={
                <Radio
                  value={option.value}
                  sx={{
                    color: '#707070',
                    '&.Mui-checked': {
                      color: '#1DBBA5',
                    },
                    '&.Mui-disabled': {
                      color: '#FFFFFF80',
                    },
                  }}
                />
              }
              label={option.label}
            />
          );
        })}
      </RadioGroup>
    </FormControl>
  );
};

export default InputRadio;
