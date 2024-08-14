import React, { Dispatch, SetStateAction } from 'react';

import {
  Checkbox,
  CheckboxProps,
  FormControlLabel,
  FormGroup,
  styled,
} from '@mui/material';

import * as S from './styles';

interface IMainActivitySectionProps {
  checked: {
    video: boolean;
    design: boolean;
    development: boolean;
    inspections: boolean;
    medical: boolean;
    sports: boolean;
  };
  setChecked: Dispatch<
    SetStateAction<{
      video: boolean;
      design: boolean;
      development: boolean;
      inspections: boolean;
      medical: boolean;
      sports: boolean;
    }>
  >;
}

const MainActivitySection: React.FC<IMainActivitySectionProps> = ({
  checked,
  setChecked,
}) => {
  console.log('🚀 ~ checked:', checked);
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
    backgroundColor: '#137cbd',
    border: '2px solid #137cbd',
    backgroundImage:
      'linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))',
    '&::before': {
      display: 'block',
      width: 16,
      height: 16,
      backgroundImage:
        "url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath" +
        " fill-rule='evenodd' clip-rule='evenodd' d='M12 5c-.28 0-.53.11-.71.29L7 9.59l-2.29-2.3a1.003 " +
        "1.003 0 00-1.42 1.42l3 3c.18.18.43.29.71.29s.53-.11.71-.29l5-5A1.003 1.003 0 0012 5z' fill='%23fff'/%3E%3C/svg%3E\")",
      content: '""',
    },
    'input:hover ~ &': {
      backgroundColor: '#106ba3',
    },
  });

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

  const handleCheckChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputName = e.target.name;
    const value = e.target.checked;
    console.log('🚀 ~ handleChange ~ value:', value);

    setChecked((prev) => ({
      ...prev,
      [inputName]: value,
    }));
  };

  return (
    <S.MainActivity>
      <p>What is your main activity? Or activities</p>

      <S.Container>
        <FormGroup>
          <FormControlLabel
            control={
              <BpCheckbox
                onChange={handleCheckChange}
                checked={checked.video}
                name="video"
              />
            }
            label="Video"
          />
          <FormControlLabel
            control={
              <BpCheckbox
                onChange={handleCheckChange}
                checked={checked.design}
                name="design"
              />
            }
            label="Design"
          />
          <FormControlLabel
            control={
              <BpCheckbox
                onChange={handleCheckChange}
                checked={checked.development}
                name="development"
              />
            }
            label="Development"
          />
          <FormControlLabel
            control={
              <BpCheckbox
                onChange={handleCheckChange}
                checked={checked.sports}
                name="sports"
              />
            }
            label="Sports"
          />
          <FormControlLabel
            control={
              <BpCheckbox
                onChange={handleCheckChange}
                checked={checked.medical}
                name="medical"
              />
            }
            label="Medical"
          />
          <FormControlLabel
            control={
              <BpCheckbox
                onChange={handleCheckChange}
                checked={checked.inspections}
                name="inspections"
              />
            }
            label="Inspections"
          />
        </FormGroup>
      </S.Container>

      <S.InputContainer>
        <S.Input type="text" placeholder="Other" name="other" />
      </S.InputContainer>
    </S.MainActivity>
  );
};

export default MainActivitySection;
