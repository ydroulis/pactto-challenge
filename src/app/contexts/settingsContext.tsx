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

interface ISettingsContextProps {
  slider: number | number[];
  setSlider: Dispatch<SetStateAction<number | number[]>>;
  color: { color1: string; color2: string; color3: string; color4: string };
  setColor: Dispatch<
    SetStateAction<{
      color1: string;
      color2: string;
      color3: string;
      color4: string;
    }>
  >;
  checked: {
    logo: boolean;
    microphone: boolean;
    camera: boolean;
    muted: boolean;
    notes: boolean;
    zoom: boolean;
    swipe: boolean;
  };
  setChecked: Dispatch<
    SetStateAction<{
      logo: boolean;
      microphone: boolean;
      camera: boolean;
      muted: boolean;
      notes: boolean;
      zoom: boolean;
      swipe: boolean;
    }>
  >;
}

const initialSlider = 3;
const initialColor = {
  color1: '#008000',
  color2: '#FF0000',
  color3: '#000000',
  color4: '#000000',
};
const initialChecked = {
  logo: false,
  microphone: false,
  camera: false,
  muted: false,
  notes: false,
  zoom: false,
  swipe: false,
};

const SettingsContext = createContext<ISettingsContextProps | undefined>(
  undefined,
);

export function SettingsContextProvider({ children }: { children: ReactNode }) {
  const [slider, setSlider] = useState<number | number[]>(initialSlider);
  const [color, setColor] = useState(initialColor);
  const [checked, setChecked] = useState(initialChecked);

  const contextValue = useMemo(
    () => ({
      checked,
      setChecked,
      slider,
      setSlider,
      color,
      setColor,
    }),
    [checked, setChecked, slider, setSlider, color, setColor],
  );

  return (
    <SettingsContext.Provider value={contextValue}>
      {children}
    </SettingsContext.Provider>
  );
}

export function useSettingsContext() {
  const context = useContext(SettingsContext);
  if (!context) {
    throw new Error(
      'useSettingsContext deve ser usado dentro de um useSettingsContextProvider',
    );
  }
  return context;
}
