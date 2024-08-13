import React, { useState } from 'react';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import CheckIcon from '@mui/icons-material/Check';
import * as S from './styles';

const Select: React.FC = () => {
  const [isSelectOpen, setIsSelectOpen] = useState(false);

  const handleCLick = () => {
    setIsSelectOpen(false);
  };

  return (
    <>
      <S.SelectInput>
        <S.Field
          onClick={() => setIsSelectOpen((prev) => !prev)}
          $isOpen={isSelectOpen}
        >
          <p></p>
          <ArrowDropDownIcon className="iconDown" />
        </S.Field>
        <S.Options $isOpen={isSelectOpen}>
          <S.Item
            $isOpen={isSelectOpen}
            className="selected"
            onClick={() => handleCLick()}
          >
            <p></p>
            <CheckIcon className="check" />
          </S.Item>
        </S.Options>
      </S.SelectInput>
      <S.Overlay
        $isOpen={isSelectOpen}
        onClick={() => setIsSelectOpen(false)}
      />
    </>
  );
};

export default Select;
