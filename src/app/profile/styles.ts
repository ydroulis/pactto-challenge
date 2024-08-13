import styled from 'styled-components';

export const Main = styled.main`
width: 100%;
max-height: 100vh;

overflow-y: auto;

display: flex;
flex-direction: column;

overflow-y: hidden;
overflow-x: hidden;

position: relative;

color: #FFFFFF;

padding: 24px 0px;
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

export const Header = styled.div`
width: 100%;
height: 96px;

display: flex;
justify-content: space-between;
gap: 12px;

box-sizing: border-box;

position: absolute;
right: 0px;
top: 0px;

padding: 24px 32px;
box-sizing: border-box;

background-color: #232225;

z-index: 9;

h1{
  height: 40px;
  color: #FFFFFF;
  font-size: 20px;
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

export const Buttons = styled.div`
display: flex;
gap: 12px;

a{
  text-decoration: none;
}
`;

export const Button = styled.button`
width: 172px;
height: 48px;

display: flex;
align-items: center;
gap: 8px;
justify-content: center;

color: #232225;
text-transform: uppercase;
font-weight: 700;
font-size: 14px;
letter-spacing: 1px;

border-radius: 24px;

background-color: #1994FC;

border: none;

cursor: pointer;

.add{
  font-size: 20px;
}

&:disabled{
  background-color: #3E3D3F !important;
  color: #232225 !important;

  cursor: default;
}

&:hover{
  background-color: #2B9CFC;
}
`;

export const Content = styled.div`
display: flex;
gap: 32px;

width: 100%;
height: 100%;

margin-top: 75px;

padding: 0px 32px;
box-sizing: border-box;

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

export const Column = styled.div`
  width: 100%;

  padding: 16px 0px 0px 0px;

  p{
    font-size: 16px;
    margin: 16px 0px;
  }

  .primary{
    background-color: #1DBBA5;

    &:hover{
      background-color: #1BAC98;
    }
}
`;

export const Form = styled.div`
display: flex;
flex-direction: column;
gap: 16px;
`;

export const Field = styled.div`
p{
  margin: 0px 0px 16px 0px;
}

.errorContainer {
  position: relative;

  .error{
    color: #BA1D32;
    font-size: 12px;

    position: absolute;
    left: 16px;
    bottom: 5px;
  }
}
`;

export const TextInput = styled.input`
width: 100%;
height: 42px;

margin-bottom: 22px;
padding: 12px;
box-sizing: border-box;
border: none;

background-color: #FFFFFF1A;

outline: none;

color: #E7E7E7;
font-size: 16px;

&:hover{
  background-color: #474649;
}

&:focus{
  background-color: #636264;
}

&::placeholder {
  color: #A7A7A8;
  font-weight: 500;
  font-size: 16px;
}
`;

export const TextareaInput = styled.textarea`
width: 100%;

margin-bottom: 32px;
padding: 12px;
box-sizing: border-box;
border: none;

background-color: #FFFFFF1A;

outline: none;

color: #E7E7E7;
font-size: 16px;
font-weight: 500;

&:hover{
  background-color: #474649;
}

&:focus{
  background-color: #636264;
}

&::placeholder {
  color: #A7A7A8;
  font-weight: 500;
  font-size: 16px;
}
`;

export const ImageProfile = styled.div`
width: 100%;

p{
  margin-top: 0px;
}
`;

export const AvatarBackground = styled.div`
width: 100%;
height: 184px;

display: flex;
align-items: center;
justify-content: center;

padding: 12px;
box-sizing: border-box;

background-color: #1C1B1E;

.imgProfile{
  width: 160px;
  height: 160px;

  border-radius: 50%;
}
`;
