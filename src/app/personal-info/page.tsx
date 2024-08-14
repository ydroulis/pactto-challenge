'use client';

import React, { useState } from 'react';
import * as S from './styles';
import { z } from 'zod';
import { FormSchema } from './components/FormSection/schema';
import FormSection from './components/FormSection';
import Link from 'next/link';
import Popup from '../components/Popup';

type FormValues = z.infer<typeof FormSchema>;

const PersonalInfo: React.FC = () => {
  const [formErrors, setFormErrors] = useState<
    Partial<Record<keyof FormValues, string>>
  >({});
  const [formValues, setFormValues] = useState<FormValues>({
    name: 'Yuri',
    secondName: 'Lombardi Androulis',
    email: 'lombardi.droulis@gmail.com',
    user: 'ydroulis',
    other: '',
  });
  const [isSaved, setIsSaved] = useState(false);
  const [selectValue, setSelectValue] = useState('Brazil');
  const [checked, setChecked] = React.useState({
    video: false,
    design: false,
    development: true,
    inspections: false,
    medical: false,
    sports: false,
  });

  const handleSave = () => {
    setIsSaved(true);

    setTimeout(() => {
      setIsSaved(false);
    }, 5000);
  };

  return (
    <>
      <S.Main>
        <S.Actions>
          <S.Button
            className="secondary"
            onClick={() => {
              setFormErrors({});
              setSelectValue('Brazil');
              setFormValues({
                name: 'Yuri',
                secondName: 'Lombardi Androulis',
                email: 'lombardi.droulis@gmail.com',
                user: 'ydroulis',
                other: '',
              });
              setChecked({
                video: false,
                design: false,
                development: true,
                inspections: false,
                medical: false,
                sports: false,
              });
            }}
          >
            Reset Changes
          </S.Button>
          <S.Button className="primary" onClick={() => handleSave()}>
            Save Changes
          </S.Button>
        </S.Actions>

        <S.Saved $isOpen={isSaved}>
          <p>Changes Saved</p>
          <S.ButtonClose onClick={() => setIsSaved(false)}>Close</S.ButtonClose>
        </S.Saved>

        <FormSection
          formErrors={formErrors}
          formValues={formValues}
          setFormErrors={setFormErrors}
          setFormValues={setFormValues}
          selectValue={selectValue}
          setSelectValue={setSelectValue}
          checked={checked}
          setChecked={setChecked}
        />

        <S.DeleteAccount>
          <p>
            To delete your Pactto account and remove your data permanently from
            all Pactto apps and services, please
          </p>
          <Link href="#">click here</Link>
        </S.DeleteAccount>
      </S.Main>
      <Popup
        popupContent="Changes Saved"
        isPopupOpen={isSaved}
        setIsPopupOpen={() => setIsSaved(false)}
      />
    </>
  );
};

export default PersonalInfo;
