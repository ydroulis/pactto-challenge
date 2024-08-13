import styled from 'styled-components';

interface IModalProps {
  $isOpen: boolean;
}

export const Modal = styled.div<IModalProps>`
display: ${(props) => (props.$isOpen ? 'flex' : 'none')};
flex-direction: column;

width: 400px;
height: 225px;

background-color: #2F2F2F;

position: fixed;
bottom: 50%;
left: 50%;

padding: 24px;
box-sizing: border-box;

transform: translate(-50%, 50%);

z-index: 99;
`;

export const Overlay = styled.div<IModalProps>`
display: ${(props) => (props.$isOpen ? 'block' : 'none')};
width: 100vw;
height: 100vh;

position: absolute;
top: 0px;
left: 0px;

background-color: transparent;

z-index: 9;
`;

export const Question = styled.p`
font-size: 20px;
margin: 20px 0px;
line-height: 30px;
color: #FFFFFF;
`;

export const Buttons = styled.div`
display: flex;

margin-top: 10px;
`;

export const ConfirmButton = styled.button`
width: 64px;
height: 48px;

border-radius: 4px;

background-color: transparent;
border: none;

color: #FFFFFF;
font-weight: 700;
font-size: 14px;

cursor: pointer;

&:hover{
  background-color: #616161;
}
`;
