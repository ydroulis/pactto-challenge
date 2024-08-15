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
import { z } from 'zod';

const FormSchema = z.object({
  publicName: z.string().min(1, 'Public name is required'),
  headline: z.string(),
  awards: z.boolean(),
  expertises: z.string(),
  youtube: z.string(),
  author: z.boolean(),
});

type FormValues = z.infer<typeof FormSchema>;

interface IProfileContextProps {
  formValues: {
    publicName: string;
    headline: string;
    expertises: string;
    awards: string;
    youtube: string;
    author: string;
  };
  setFormValues: Dispatch<
    SetStateAction<{
      publicName: string;
      headline: string;
      expertises: string;
      awards: string;
      youtube: string;
      author: string;
    }>
  >;
  areaContent: {
    footer: string;
    aboutMe: string;
  };
  setAreaContent: Dispatch<
    SetStateAction<{
      footer: string;
      aboutMe: string;
    }>
  >;
  enterInput: { expertise: string[]; award: string[]; follow: string[] };
  setEnterInput: Dispatch<
    SetStateAction<{ expertise: string[]; award: string[]; follow: string[] }>
  >;
}

const ProfileContext = createContext<IProfileContextProps | undefined>(
  undefined,
);

export function ProfileContextProvider({ children }: { children: ReactNode }) {
  const [enterInput, setEnterInput] = useState({
    expertise: ['Expertise 1'],
    award: ['Award'],
    follow: ['www.pactto.com'],
  });
  const [areaContent, setAreaContent] = useState({
    footer: '',
    aboutMe: '',
  });
  const [formValues, setFormValues] = useState({
    publicName: 'Yuri Lombardi Androulis',
    headline: '',
    expertises: '',
    awards: '',
    youtube: '',
    author: '',
  });
  const contextValue = useMemo(
    () => ({
      formValues,
      setFormValues,
      enterInput,
      setEnterInput,
      areaContent,
      setAreaContent,
    }),
    [
      formValues,
      setFormValues,
      enterInput,
      setEnterInput,
      areaContent,
      setAreaContent,
    ],
  );

  return (
    <ProfileContext.Provider value={contextValue}>
      {children}
    </ProfileContext.Provider>
  );
}

export function useProfileContext() {
  const context = useContext(ProfileContext);
  if (!context) {
    throw new Error(
      'useProfileContext deve ser usado dentro de um useProfileContextProvider',
    );
  }
  return context;
}
