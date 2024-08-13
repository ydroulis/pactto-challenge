import React, { ChangeEvent } from 'react';
import * as S from './styles';
import Link from 'next/link';

interface IFieldProps {
  value: string;
  handleChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  handleAreaChange?: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  inputType: string;
  title: string;
  inputName: string;
  placeholder?: string;
  link?: string;
  info?: string;
  className?: string;
}

const Field: React.FC<IFieldProps> = ({
  value,
  handleChange,
  handleAreaChange,
  inputName,
  inputType,
  title,
  placeholder,
  link,
  info,
  className,
}) => {
  return (
    <S.Field>
      <p>{title}</p>
      {link && <Link href="#">{link}</Link>}
      {info && <span className={className}>{info}</span>}
      {inputType === 'text' && handleChange && (
        <S.TextInput
          type="text"
          onChange={(e) => handleChange(e)}
          value={value}
          name={inputName}
          placeholder={placeholder}
        />
      )}
      {inputType === 'area' && handleAreaChange && (
        <S.TextareaInput
          onChange={(e) => handleAreaChange(e)}
          value={value}
          name={inputName}
          rows={3}
        />
      )}
    </S.Field>
  );
};

export default Field;
