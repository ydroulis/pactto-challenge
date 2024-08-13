import styled from 'styled-components';

interface IPopupProps {
  $isOpen: boolean;
}

export const Popup = styled.div<IPopupProps>`
width: 344px;
height: 48px;

background-color: #D9D9D9;

display: flex;
align-items: center;
justify-content: space-between;

transition: all 0.3s ease-out;

opacity: ${(props) => (props.$isOpen ? '1' : '0')};

position: fixed;
top: 8px;
right: 8px;

padding: 14px 8px 14px 16px;
box-sizing: border-box;

border-radius: 4px;

font-size: 14px;

z-index: ${(props) => (props.$isOpen ? '99999' : '')};

p{
  color: #424242DE;
}
`;

export const ButtonClose = styled.button`
border: none;

width: 64px;
height: 30px;

background-color: transparent;

cursor: pointer;

font-weight: 500;
color: #000000DE;
`;
