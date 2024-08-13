import React, { Dispatch, SetStateAction, useState } from 'react';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import CheckIcon from '@mui/icons-material/Check';
import * as S from './styles';

interface ISelectInput {
  list: string[];
  selectValue: string;
  setSelectValue: Dispatch<SetStateAction<string>>;
}

const SelectInput: React.FC<ISelectInput> = ({
  list,
  setSelectValue,
  selectValue,
}) => {
  const [isSelectOpen, setIsSelectOpen] = useState(false);

  const handleCLick = (value: string) => {
    setSelectValue(value);
    setIsSelectOpen(false);
  };

  return (
    <>
      <S.SelectInput>
        <S.Field
          onClick={() => setIsSelectOpen((prev) => !prev)}
          $isOpen={isSelectOpen}
        >
          <p>{selectValue}</p>
          <ArrowDropDownIcon className="iconDown" />
        </S.Field>
        <S.Options $isOpen={isSelectOpen}>
          {list.map((option, i) => {
            const isSelectedItem = option === selectValue;
            const selected = isSelectedItem ? 'selected' : '';

            return (
              <S.Item
                $isOpen={isSelectOpen}
                className={selected}
                onClick={() => handleCLick(option)}
              >
                <p key={i}>{option}</p>

                {isSelectedItem && <CheckIcon className="check" />}
              </S.Item>
            );
          })}
        </S.Options>
      </S.SelectInput>
      <S.Overlay
        $isOpen={isSelectOpen}
        onClick={() => setIsSelectOpen(false)}
      />
    </>
  );
};

export default SelectInput;
