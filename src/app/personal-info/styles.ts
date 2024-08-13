import styled from 'styled-components';

interface ISavedProps {
  $isOpen: boolean;
}

export const Main = styled.main`
width: 100%;
max-height: 100vh;

overflow-y: auto;

display: flex;
flex-direction: column;

position: relative;

color: #FFFFFF;

padding: 24px 32px;
box-sizing: border-box;

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

export const Actions = styled.div`
width: 100%;

display: flex;
justify-content: flex-end;
gap: 12px;

box-sizing: border-box;

position: fixed;
left: 0px;
top: 0px;

padding: 24px 32px;

background-color: #232225;

z-index: 9;

h1{
  height: 40px;

  font-size: 32px;
  font-weight: 700;
  margin: 21.440px 0px;
  padding-bottom: 16px;
}

.primary{
  background-color: #1DBBA5;

  &:hover{
    background-color: #1BAC98;
  }
}

.secondary{
  background-color: #B8B8B8;

  &:hover{
    background-color: #BEBEBE;
  }
}
`;

export const Button = styled.button`
width: 172px;
height: 48px;

color: #232225;
text-transform: uppercase;
font-weight: 700;
font-size: 14px;
letter-spacing: 1px;

border-radius: 24px;

border: none;

cursor: pointer;
`;

export const Saved = styled.div<ISavedProps>`
width: 344px;
height: 48px;

background-color: #D9D9D9;

display: flex;
align-items: center;
justify-content: space-between;

transition: all 0.3s ease-out;

opacity: ${(props) => (props.$isOpen ? '1' : '0')};

position: absolute;
top: 8px;
right: 8px;

padding: 14px 8px 14px 16px;
box-sizing: border-box;

border-radius: 4px;

font-size: 14px;

z-index: ${(props) => (props.$isOpen ? '99' : '0')};

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

export const DeleteAccount = styled.div`
display: flex;

color: #FFFFFF;
font-size: 13px;

margin: 32px 0px 8px 0px;

p{
  margin-right: 5px;
}

a{
  color: #FFFFFF;
}
`;
