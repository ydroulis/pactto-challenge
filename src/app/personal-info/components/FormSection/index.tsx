import React, { Dispatch, SetStateAction } from 'react';
import * as S from './styles';
import SelectInput from '../../../components/SelectInput';

import MainActivitySection from '../../components/MainActivitySection';
import { FormSchema } from './schema';
import { z } from 'zod';
import { countries } from './countries';

type FormValues = z.infer<typeof FormSchema>;

interface IFormSectionProps {
  formValues: {
    name: string;
    secondName: string;
    email: string;
    user: string;
    other: string;
  };
  setFormValues: Dispatch<
    SetStateAction<{
      name: string;
      secondName: string;
      email: string;
      user: string;
      other: string;
    }>
  >;
  setFormErrors: Dispatch<
    SetStateAction<Partial<Record<keyof FormValues, string>>>
  >;
  formErrors: Partial<Record<keyof FormValues, string>>;
  selectValue: string;
  setSelectValue: Dispatch<SetStateAction<string>>;
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

const FormSection: React.FC<IFormSectionProps> = ({
  formValues,
  setFormValues,
  setFormErrors,
  formErrors,
  selectValue,
  setSelectValue,
  checked,
  setChecked,
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputName = e.target.name as keyof FormValues;
    const value = e.target.value;

    setFormValues((prevFormValues) => ({
      ...prevFormValues,
      [inputName]: value,
    }));

    try {
      FormSchema.parse({ ...formValues, [inputName]: value });

      setFormErrors((prevErrors) => ({
        ...prevErrors,
        [inputName]: undefined,
      }));
    } catch (error) {
      if (error instanceof z.ZodError) {
        setFormErrors((prevErrors) => ({
          ...prevErrors,
          [inputName]:
            error.errors.find((err) => err.path[0] === inputName)?.message ||
            '',
        }));
      }
    }
  };

  return (
    <S.Form>
      <S.TextInput
        type="text"
        onChange={(e) => handleChange(e)}
        value={formValues.name}
        name="name"
      />
      <span className="error">{formErrors.name && formErrors.name}</span>

      <S.TextInput
        type="text"
        onChange={(e) => handleChange(e)}
        value={formValues.secondName}
        name="secondName"
      />
      <span className="error">
        {formErrors.secondName && formErrors.secondName}
      </span>

      <S.TextInput
        type="text"
        onChange={(e) => handleChange(e)}
        value={formValues.email}
        name="email"
      />
      <span className="error">{formErrors.email && formErrors.email}</span>

      <SelectInput
        list={countries}
        selectValue={selectValue}
        setSelectValue={setSelectValue}
      />

      <MainActivitySection
        formValues={formValues}
        handleChange={handleChange}
        setChecked={setChecked}
        checked={checked}
      />

      <S.UserPassword>
        <p>User handle and password</p>

        <S.TextInput
          type="text"
          onChange={(e) => handleChange(e)}
          value={formValues.user}
          name="user"
          placeholder="User name, your Pactto handle (e.g. johnsmith)"
        />
        <span className="error">{formErrors.user && formErrors.user}</span>

        <S.TextInput type="password" placeholder="Password" />
        <span className="error"></span>

        <S.TextInput type="password" placeholder="Confirm ppassword" />
        <span className="error"></span>
      </S.UserPassword>
    </S.Form>
  );
};

export default FormSection;
