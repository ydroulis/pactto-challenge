import styled from 'styled-components';

interface IModalProps {
  $isOpen: boolean;
  width?: string;
}

export const Modal = styled.div<IModalProps>`
display: ${(props) => (props.$isOpen ? 'flex' : 'none')};
flex-direction: column;

min-width: 400px;
width: ${(props) => props.width};
max-width: 550px;
min-height: 225px;

background-color: #2F2F2F;

position: fixed;
bottom: 50%;
left: 50%;

padding: 24px;
box-sizing: border-box;

transform: translate(-50%, 50%);

z-index: 99;

border-radius: 4px;
`;

export const Header = styled.div`
width: 100%;

h1{
  color: #FFFFFFDE;
  font-size: 20px;
  font-weight: 700;
}

p{
  margin-top: 18px;

  font-size: 15px;
  color: #CBCBCB;
}
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

export const Content = styled.div`
max-height: 396px;
font-size: 20px;
line-height: 30px;
color: #FFFFFF;

overflow-y: auto;
overflow-x: hidden;

&::-webkit-scrollbar {
    width: 5px;
    display: block;
  }

  &::-webkit-scrollbar-thumb {
    background-color: darkgrey;
    outline: 1px solid slategrey;
    border-radius: 5px;
  }
`;

export const Buttons = styled.div`
display: flex;

margin-top: 10px;

.secondary{
  color: #9b9b9b;
}
`;

export const ConfirmButton = styled.button`
width: 105.81px;
height: 36px;

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
