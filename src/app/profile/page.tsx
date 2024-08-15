'use client';

import React, { useEffect, useState } from 'react';
import * as S from './styles';
import Image from 'next/image';
import AddIcon from '@mui/icons-material/Add';
import AvatarImage from '../assets/images/avatar-placeholder.png';
import AddItemOnEnter from './components/AddItemOnEnter';
import { z } from 'zod';
import Popup from '../components/Popup';
import Link from 'next/link';
import { useProfileContext } from '../contexts/profileContext';

const enterInitial = {
  expertise: ['Expertise 1'],
  award: ['Award'],
  follow: ['www.pactto.com'],
};

const areaInitial = {
  footer: '',
  aboutMe: '',
};

const formValuesInitial = {
  publicName: 'Yuri Lombardi Androulis',
  headline: '',
  expertises: '',
  awards: '',
  youtube: '',
  author: '',
};

const FormSchema = z.object({
  publicName: z.string().min(1, 'Public name is required'),
  headline: z.string(),
  awards: z.boolean(),
  expertises: z.string(),
  youtube: z.string(),
  author: z.boolean(),
});

type FormValues = z.infer<typeof FormSchema>;

const Profile: React.FC = () => {
  const {
    areaContent,
    enterInput,
    formValues,
    setAreaContent,
    setEnterInput,
    setFormValues,
  } = useProfileContext();
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [noChanges, setNoChanges] = useState(true);
  const [enterInputLocal, setEnterInputLocal] = useState({
    expertise: ['Expertise 1'],
    award: ['Award'],
    follow: ['www.pactto.com'],
  });
  const [areaContentLocal, setAreaContentLocal] = useState({
    footer: '',
    aboutMe: '',
  });
  const [formValuesLocal, setFormValuesLocal] = useState({
    publicName: 'Yuri Lombardi Androulis',
    headline: '',
    expertises: '',
    awards: '',
    youtube: '',
    author: '',
  });
  const [formErrors, setFormErrors] = useState<
    Partial<Record<keyof FormValues, string>>
  >({});

  useEffect(() => {
    setFormValuesLocal(formValues);
    setAreaContentLocal(areaContent);
    setEnterInputLocal(enterInput);
  }, [formValues, areaContent, enterInput]);

  useEffect(() => {
    const formsEqual =
      formValuesLocal.publicName === formValues.publicName &&
      formValuesLocal.headline === formValues.headline &&
      formValuesLocal.expertises === formValues.expertises &&
      formValuesLocal.awards === formValues.awards &&
      formValuesLocal.youtube === formValues.youtube &&
      formValuesLocal.author === formValues.author;

    const areaEqual =
      areaContentLocal.aboutMe === areaContent.aboutMe &&
      areaContentLocal.footer === areaContent.footer;

    const enterEqual =
      JSON.stringify(enterInputLocal) === JSON.stringify(enterInput);
    console.log('🚀 ~ useEffect ~ areaEqual:', enterEqual);

    setNoChanges(formsEqual && areaEqual && enterEqual);
  }, [
    formValues,
    areaContent,
    enterInput,
    formValuesLocal,
    areaContentLocal,
    enterInputLocal,
  ]);

  const savedDisabled = noChanges;

  const handleAreaChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const areaValue = event.target.value;
    const areaName = event.target.name;

    setAreaContentLocal({
      ...areaContent,
      [areaName]: areaValue,
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputName = e.target.name;
    const inputValue = e.target.value;

    setFormValuesLocal({
      ...formValues,
      [inputName]: inputValue,
    });

    try {
      FormSchema.parse({ ...formValues, [inputName]: inputValue });

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

  const handleAddOnEnter = (
    inputValue: string,
    inputName: 'expertise' | 'award' | 'follow' | undefined,
  ) => {
    inputName &&
      setEnterInputLocal((prevState) => ({
        ...prevState,
        [inputName]: [...prevState[inputName], inputValue],
      }));
  };

  const handleRemoveOnEnter = (
    indexToRemove: number,
    inputName: 'expertise' | 'award' | 'follow' | undefined,
  ) => {
    inputName &&
      setEnterInputLocal((prevState) => ({
        ...prevState,
        [inputName]: prevState[inputName].filter(
          (_, index) => index !== indexToRemove,
        ),
      }));
  };

  const handleSave = () => {
    setIsPopupOpen(true);
    setFormValues(formValuesLocal);
    setAreaContent(areaContentLocal);
    setEnterInput(enterInputLocal);

    setTimeout(() => {
      setIsPopupOpen(false);
    }, 5000);
  };

  return (
    <>
      <S.Main>
        <S.Header>
          <h1>Please edit your Pactto page below.</h1>
          <S.Buttons>
            <Link href="#">
              <S.Button>Launch</S.Button>
            </Link>
            <S.Button
              disabled={savedDisabled}
              className="primary"
              onClick={() => handleSave()}
            >
              Save
            </S.Button>
          </S.Buttons>
        </S.Header>
        <S.Content>
          <S.Column>
            <S.Form>
              <S.Field>
                <p>Hero</p>
                <div className="errorContainer">
                  <S.TextInput
                    type="text"
                    name="publicName"
                    placeholder="Public name"
                    onChange={(e) => handleChange(e)}
                    value={formValuesLocal.publicName}
                  />
                  <span className="error">
                    {formErrors.publicName && formErrors.publicName}
                  </span>
                </div>
                <S.TextInput
                  type="text"
                  name="headline"
                  placeholder="Headline"
                  onChange={(e) => handleChange(e)}
                  value={formValuesLocal.headline}
                />
              </S.Field>
              <S.Field>
                <p>About Me</p>
                <S.TextareaInput
                  onChange={(e) => handleAreaChange(e)}
                  value={areaContentLocal.aboutMe}
                  name="aboutMe"
                  rows={8}
                  placeholder="About Me"
                />
              </S.Field>
              <S.Field>
                <S.TextInput
                  name="expertises"
                  placeholder="Expertise Title"
                  onChange={(e) => handleChange(e)}
                  value={formValuesLocal.expertises}
                />
              </S.Field>

              <AddItemOnEnter
                name="expertise"
                placeholder='Add expertise and hit "Enter"'
                initialState={enterInputLocal.expertise}
                onAdd={handleAddOnEnter}
                onRemove={handleRemoveOnEnter}
              />

              <S.Field>
                <S.TextInput
                  name="awards"
                  placeholder="Awards Title"
                  onChange={(e) => handleChange(e)}
                  value={formValuesLocal.awards}
                />
              </S.Field>

              <AddItemOnEnter
                name="award"
                placeholder='Add award and hit "Enter"'
                initialState={enterInput.award}
                onAdd={handleAddOnEnter}
                onRemove={handleRemoveOnEnter}
              />

              <S.Field>
                <p>Give me a follow</p>
                <AddItemOnEnter
                  name="follow"
                  placeholder='Add social media channel and hit "Enter"'
                  initialState={enterInput.follow}
                  onAdd={handleAddOnEnter}
                  onRemove={handleRemoveOnEnter}
                />
              </S.Field>

              <S.Field>
                <p>YouTube video</p>
                <S.TextInput
                  name="youtube"
                  placeholder="YouTube video URL"
                  onChange={(e) => handleChange(e)}
                  value={formValuesLocal.youtube}
                />
              </S.Field>

              <S.Field>
                <p>Footer</p>
                <S.TextareaInput
                  name="footer"
                  rows={5}
                  placeholder="Quote"
                  onChange={(e) => handleAreaChange(e)}
                  value={areaContentLocal.footer}
                />
              </S.Field>
              <S.TextInput
                name="author"
                placeholder="Quote Author"
                onChange={(e) => handleChange(e)}
                value={formValuesLocal.author}
              />
            </S.Form>
          </S.Column>
          <S.Column>
            <S.ImageProfile>
              <p>Avatar</p>
              <S.AvatarBackground>
                <Image
                  alt="Profile image"
                  src={AvatarImage}
                  className="imgProfile"
                />
              </S.AvatarBackground>
            </S.ImageProfile>
            <p>Carousel</p>
            <S.Button className="primary">
              <AddIcon className="add" />
              Add Image
            </S.Button>
          </S.Column>
        </S.Content>
      </S.Main>
      <Popup
        popupContent="Changes saved to app.pactto.com/ydroulis"
        isPopupOpen={isPopupOpen}
        setIsPopupOpen={setIsPopupOpen}
      />
    </>
  );
};

export default Profile;
