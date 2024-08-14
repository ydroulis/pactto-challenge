'use client';

import {
  createContext,
  useContext,
  useState,
  ReactNode,
  useMemo,
  SetStateAction,
  Dispatch,
} from 'react';
import { FormSchema } from '../personal-info/components/FormSection/schema';
import { z } from 'zod';

type FormValues = z.infer<typeof FormSchema>;

interface IPersonalContextProps {
  isSaved: boolean;
  setIsSaved: Dispatch<SetStateAction<boolean>>;
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

const PersonalContext = createContext<IPersonalContextProps | undefined>(
  undefined,
);

export function PersonalContextProvider({ children }: { children: ReactNode }) {
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
  const [checked, setChecked] = useState({
    video: false,
    design: false,
    development: false,
    inspections: false,
    medical: false,
    sports: false,
  });

  const contextValue = useMemo(
    () => ({
      checked,
      formErrors,
      formValues,
      isSaved,
      selectValue,
      setChecked,
      setFormErrors,
      setFormValues,
      setIsSaved,
      setSelectValue,
    }),
    [
      checked,
      formErrors,
      formValues,
      isSaved,
      selectValue,
      setChecked,
      setFormErrors,
      setFormValues,
      setIsSaved,
      setSelectValue,
    ],
  );

  return (
    <PersonalContext.Provider value={contextValue}>
      {children}
    </PersonalContext.Provider>
  );
}

export function usePersonalContext() {
  const context = useContext(PersonalContext);
  if (!context) {
    throw new Error(
      'usePersonalContext deve ser usado dentro de um usePersonalContextProvider',
    );
  }
  return context;
}
