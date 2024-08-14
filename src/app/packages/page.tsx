'use client';

import React, { useEffect, useState } from 'react';
import * as S from './styles';
import AddIcon from '@mui/icons-material/Add';
import Link from 'next/link';
// import Modal from './components/Modal';
import Popup from '../components/Popup';
import { IFormValues } from './types';
import PackageOptions from './components/PackageOptions';
import Modal from '../components/Modal';

const initialState = {
  name: 'Change the name of package',
  details: '',
  instructions: '',
  reviewType: 'singleFile',
  reviewFileType: 'video',
  options: '',
  price: '25',
  credits: '1',
};

const initialSelect = 'USD';
const initialArea = 'Add description to this package';
const initialCheck = false;

const Packages: React.FC = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [noChanges, setNoChanges] = useState(true);
  const [popupContent, setPopupContent] = useState('');
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);
  const [openPackage, setOpenPackage] = useState(false);
  const [checked, setChecked] = useState(initialCheck);
  const [selectValue, setSelectValue] = useState(initialSelect);
  const [areaContent, setAreaContent] = useState(initialArea);
  const [formValues, setFormValues] = useState<IFormValues>(initialState);

  useEffect(() => {
    const formValuesEqual =
      initialState.name === formValues.name &&
      initialState.details === formValues.details &&
      initialState.instructions === formValues.instructions &&
      initialState.reviewType === formValues.reviewType &&
      initialState.reviewFileType === formValues.reviewFileType &&
      initialState.options === formValues.options &&
      initialState.price === formValues.price &&
      initialState.credits === formValues.credits;

    const selectEqual = initialSelect === selectValue;
    const areaEqual = initialArea === areaContent;
    const checkEqual = initialCheck === checked;

    setNoChanges(formValuesEqual && selectEqual && areaEqual && checkEqual);
  }, [formValues, selectValue, areaContent, checked]);

  const savedDisabled = noChanges;

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputName = event.target.name;
    const value = event.target.value;
    const checked = event.target.checked;

    setFormValues({
      ...formValues,
      [inputName]: value,
    });

    if (inputName === 'switch' && checked) {
      setChecked(checked);

      handlePopup('Package published');
    } else if (inputName === 'switch' && !checked) {
      setChecked(checked);

      handlePopup('Package unpublished');
    }
  };

  const handleAreaChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = event.target.value;

    setAreaContent(value);
  };

  const handleAddPackage = () => {
    setOpenPackage(true);
  };

  const handlePopup = (content: string) => {
    setIsPopupOpen(true);

    setPopupContent(content);

    setTimeout(() => {
      setIsPopupOpen(false);
    }, 5000);
  };

  const handleDelete = () => {
    setIsDeleteOpen(false);
    setOpenPackage(false);
    setSelectValue('USD');
    setChecked(false);
    setAreaContent('Add description to this package');
    setFormValues(initialState);
  };

  return (
    <>
      <S.Main>
        <S.Header>
          <S.Button className="primary" onClick={handleAddPackage}>
            <AddIcon className="add" />
            Add Package
          </S.Button>
          <S.Container>
            <S.Button
              disabled={savedDisabled}
              onClick={() => handlePopup('Package info updated')}
            >
              Save Changes
            </S.Button>
            <Link href="https://connect.stripe.com/setup/e/acct_1PlbNr2ckC85QRo3/Q0q6X0smEXZz">
              <S.Button className="primary">Payment Details</S.Button>
            </Link>
          </S.Container>
        </S.Header>
        <div className="container">
          {openPackage && (
            <PackageOptions
              areaContent={areaContent}
              checked={checked}
              formValues={formValues}
              handleAreaChange={handleAreaChange}
              handleChange={handleChange}
              handlePopup={handlePopup}
              noChanges={noChanges}
              selectValue={selectValue}
              setIsDeleteOpen={setIsDeleteOpen}
              setSelectValue={setSelectValue}
            />
          )}

          <Popup
            isPopupOpen={isPopupOpen}
            popupContent={popupContent}
            setIsPopupOpen={setIsPopupOpen}
          />
        </div>
      </S.Main>

      <Modal
        closeAction={handleDelete}
        buttonAction={() => setIsDeleteOpen(false)}
        isOpen={isDeleteOpen}
        width="400px"
        primaryBtn="Yes"
        secondaryBtn="No"
      >
        <p style={{ height: '90px', margin: '20px 0px' }}>
          Are you sure you want to delete the "Change the name of package"
          package? This can’t be undone.
        </p>
      </Modal>
    </>
  );
};

export default Packages;
