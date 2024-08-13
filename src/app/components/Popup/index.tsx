import React, { Dispatch, SetStateAction } from 'react';
import * as S from './styles';

interface IPopupProps {
  popupContent: string;
  isPopupOpen: boolean;
  setIsPopupOpen: Dispatch<SetStateAction<boolean>>;
}

const Popup: React.FC<IPopupProps> = ({
  popupContent,
  isPopupOpen,
  setIsPopupOpen,
}) => {
  return (
    <S.Popup $isOpen={isPopupOpen}>
      <p>{popupContent}</p>
      <S.ButtonClose onClick={() => setIsPopupOpen(false)}>Close</S.ButtonClose>
    </S.Popup>
  );
};

export default Popup;
