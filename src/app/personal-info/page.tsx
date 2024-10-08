'use client';

import React, { useEffect, useState } from 'react';
import * as S from './styles';
import FormSection from './components/FormSection';
import Link from 'next/link';
import Popup from '../components/Popup';
import { usePersonalContext } from '../contexts/personalContex';
import { FormSchema } from '../personal-info/components/FormSection/schema';
import { z } from 'zod';

type FormValues = z.infer<typeof FormSchema>;

const PersonalInfo: React.FC = () => {
  const {
    formValues,
    setFormValues,
    selectValue,
    setSelectValue,
    setChecked,
    checked,
  } = usePersonalContext();
  const [localFormValues, setLocalFormValues] = useState(formValues);
  const [localSelectValue, setLocalSelectValue] = useState(selectValue);
  const [localCheckedValue, setLocalCheckedValue] = useState(checked);
  const [isSaved, setIsSaved] = useState(false);
  const [formErrors, setFormErrors] = useState<
    Partial<Record<keyof FormValues, string>>
  >({});

  useEffect(() => {
    setLocalFormValues(formValues);
    setLocalSelectValue(selectValue);
    setLocalCheckedValue(checked);
  }, [formValues, selectValue, checked]);

  const handleReset = () => {
    setFormErrors({});
    setLocalFormValues(formValues);
    setLocalSelectValue(selectValue);
    setLocalCheckedValue(checked);
  };

  const handleSave = () => {
    setIsSaved(true);
    setFormValues(localFormValues);
    setSelectValue(localSelectValue);
    setChecked(localCheckedValue);

    setTimeout(() => {
      setIsSaved(false);
    }, 5000);
  };

  return (
    <>
      <S.Main>
        <S.Actions>
          <S.Button className="secondary" onClick={handleReset}>
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
          formValues={localFormValues}
          setFormErrors={setFormErrors}
          setFormValues={setLocalFormValues}
          selectValue={localSelectValue}
          setSelectValue={setLocalSelectValue}
          checked={localCheckedValue}
          setChecked={setLocalCheckedValue}
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
