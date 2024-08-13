import React, { Dispatch, SetStateAction } from 'react';
import * as S from './styles';

interface IModalProps {
  isDeleteOpen: boolean;
  setIsDeleteOpen: Dispatch<SetStateAction<boolean>>;
  handleDelete: () => void;
}

const Modal: React.FC<IModalProps> = ({
  isDeleteOpen,
  setIsDeleteOpen,
  handleDelete,
}) => {
  return (
    <>
      <S.Modal $isOpen={isDeleteOpen}>
        <S.Question>
          Are you sure you want to delete the "Change the name of package"
          package? This can’t be undone.
        </S.Question>
        <S.Buttons>
          <S.ConfirmButton onClick={handleDelete}>Yes</S.ConfirmButton>
          <S.ConfirmButton onClick={() => setIsDeleteOpen(false)}>
            No
          </S.ConfirmButton>
        </S.Buttons>
      </S.Modal>
      <S.Overlay
        $isOpen={isDeleteOpen}
        onClick={() => setIsDeleteOpen(false)}
      />
    </>
  );
};

export default Modal;
