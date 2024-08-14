'use client';

import React, { useCallback, useEffect, useRef, useState } from 'react';
import * as S from './styles';
import { Box, Slider } from '@mui/material';
import InputColor from './components/InputColor';
import Select from './components/Select';
import Image from 'next/image';
import LogoImage from '../assets/images/logo.png';
import Popup from '../components/Popup';
import CheckInput from './components/CheckInput';
import { useSettingsContext } from '../contexts/settingsContext';

// const initialSlider = 3;
// const initialColor = {
//   color1: '#008000',
//   color2: '#FF0000',
//   color3: '#000000',
//   color4: '#000000',
// };
// const initialChecked = {
//   logo: false,
//   microphone: true,
//   camera: true,
//   muted: true,
//   notes: false,
//   zoom: true,
//   swipe: false,
// };

const ReviewSettings: React.FC = () => {
  const { checked, color, setChecked, setColor, setSlider, slider } =
    useSettingsContext();
  const inputRefs = useRef<{ [key: string]: HTMLInputElement | null }>({});
  const [isSaved, setIsSaved] = useState(false);
  const [isDisabled, setIsDisabled] = useState(true);
  const [sliderLocal, setSliderLocal] = useState<number | number[]>(slider);
  const [colorLocal, setColorLocal] = useState(color);
  const [checkedLocal, setCheckedLocal] = useState(checked);

  useEffect(() => {
    const sliderEqual = slider === sliderLocal;
    const colorEqual =
      color.color1 === colorLocal.color1 &&
      color.color2 === colorLocal.color2 &&
      color.color3 === colorLocal.color3 &&
      color.color4 === colorLocal.color4;
    const checkedEqual =
      checked.camera === checkedLocal.camera &&
      checked.logo === checkedLocal.logo &&
      checked.microphone === checkedLocal.microphone &&
      checked.muted === checkedLocal.muted &&
      checked.notes === checkedLocal.notes &&
      checked.swipe === checkedLocal.swipe &&
      checked.zoom === checkedLocal.zoom;

    setIsDisabled(sliderEqual && colorEqual && checkedEqual);
  }, [sliderLocal, colorLocal, checkedLocal]);

  useEffect(() => {
    setColorLocal(color);
    setSliderLocal(slider);
    setCheckedLocal(checked);
  }, [color, slider, checked]);

  const handleCheckedChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputName = e.target.name;
    const value = e.target.checked;

    setCheckedLocal((prevchecked) => ({
      ...prevchecked,
      [inputName]: value,
    }));
  };

  const handleColorChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target;
      setColorLocal((prevColor) => ({
        ...prevColor,
        [name]: value,
      }));

      if (inputRefs.current[name]) {
        inputRefs.current[name]!.focus();
      }
    },
    [],
  );

  const handleSave = () => {
    setIsSaved(true);
    setColor(colorLocal);
    setSlider(sliderLocal);
    setChecked(checkedLocal);

    setTimeout(() => {
      setIsSaved(false);
    }, 5000);
  };

  const handleReset = () => {
    setColorLocal(color);
    setSliderLocal(slider);
    setCheckedLocal(checked);
  };

  return (
    <>
      <S.Main>
        <S.Actions>
          <h1>Review Settings</h1>
          <S.Buttons>
            <S.Button className="secondary" onClick={handleReset}>
              Reset Changes
            </S.Button>
            <S.Button
              className="primary"
              disabled={isDisabled}
              onClick={() => handleSave()}
            >
              Save Changes
            </S.Button>
          </S.Buttons>
        </S.Actions>
        <S.Content>
          <CheckInput
            checked={checkedLocal}
            handleCheckedChange={handleCheckedChange}
          />

          <S.Brush>
            <p>Brush size for tools</p>
            <Box sx={{ width: 120, marginTop: 1 }}>
              <Slider
                valueLabelDisplay="auto"
                aria-label="pretto slider"
                value={sliderLocal}
                step={1}
                min={1}
                max={7}
                onChange={(event, newValue) => {
                  setSliderLocal(newValue);
                }}
                name="slider"
              />
            </Box>
          </S.Brush>

          <S.NoteColor>
            <p>Note color options</p>
            <S.Inputs>
              <InputColor
                id="1"
                label="Color 1"
                name="color1"
                value={colorLocal.color1}
                onChange={handleColorChange}
              />
              <InputColor
                id="2"
                label="Color 2"
                name="color2"
                value={colorLocal.color2}
                onChange={handleColorChange}
              />
              <InputColor
                id="3"
                label="Color 3"
                name="color3"
                value={colorLocal.color3}
                onChange={handleColorChange}
              />
              <InputColor
                id="4"
                label="Color 4"
                name="color4"
                value={colorLocal.color4}
                onChange={handleColorChange}
              />
            </S.Inputs>
          </S.NoteColor>

          <S.SelectInputs>
            <div>
              <p>Camera</p>
              <Select />
            </div>
            <div>
              <p>Microphone</p>
              <Select />
            </div>
            <div>
              <p>Speakers</p>
              <Select />
            </div>
          </S.SelectInputs>
        </S.Content>
        <S.ReplaceImage>
          <S.Image>
            <Image alt="Logo Image" src={LogoImage} className="logo" />
          </S.Image>
          <p>replace logo</p>
        </S.ReplaceImage>
      </S.Main>
      <Popup
        popupContent="Changes saved"
        isPopupOpen={isSaved}
        setIsPopupOpen={setIsSaved}
      />
    </>
  );
};

export default ReviewSettings;
