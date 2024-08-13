import React, { Dispatch, SetStateAction } from 'react';
import * as S from './styles';

interface IModalProps {
  isOpen: boolean;
  closeAction: Dispatch<SetStateAction<boolean>>;
  buttonAction: () => void;
  children: React.ReactNode;
  width: string;
  title?: string;
  subtitle?: string;
  primaryBtn: string;
  secondaryBtn: string;
}

const Modal: React.FC<IModalProps> = ({
  isOpen,
  closeAction,
  buttonAction,
  children,
  width,
  title,
  subtitle,
  primaryBtn,
  secondaryBtn,
}) => {
  return (
    <>
      <S.Modal $isOpen={isOpen} width={width}>
        {title && (
          <S.Header>
            <h1>{title}</h1> <p>{subtitle}</p>
          </S.Header>
        )}
        <S.Content>{children}</S.Content>
        <S.Buttons>
          <S.ConfirmButton onClick={buttonAction} className="secondary">
            {secondaryBtn}
          </S.ConfirmButton>
          <S.ConfirmButton onClick={() => closeAction(false)}>
            {primaryBtn}
          </S.ConfirmButton>
        </S.Buttons>
      </S.Modal>
      <S.Overlay $isOpen={isOpen} onClick={() => closeAction(false)} />
    </>
  );
};

export default Modal;
