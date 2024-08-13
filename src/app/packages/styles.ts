import styled from 'styled-components';

export const Main = styled.main`
width: 100%;
max-height: 100vh;

overflow-y: hidden;
overflow-x: hidden;

display: flex;
flex-direction: column;

position: relative;

color: #FFFFFF;

padding-top: 24px;
box-sizing: border-box;

.container{
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
}

.add{
  font-size: 18px;
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

export const Header = styled.div`
width: 100%;

display: flex;
justify-content: space-between;
gap: 12px;

box-sizing: border-box;
padding: 24px 32px;

position: absolute;
right: 0px;
top: 0px;

background-color: #232225;

z-index: 9;

h1{
  height: 40px;

  font-size: 32px;
  font-weight: 700;
  margin: 21.440px 0px;
  padding-bottom: 16px;
}
`;

export const Button = styled.button`
width: 172px;
height: 48px;

display: flex;
align-items: center;
justify-content: center;
gap: 8px;

color: #232225;
text-transform: uppercase;
font-weight: 700;
font-size: 14px;
letter-spacing: 1px;

border-radius: 24px;

border: none;

cursor: pointer;

background-color: #1994FC;

&:disabled{
  background-color: #3E3D3F;
  color: #232225;

  cursor: default;
}
`;

export const Container = styled.div`
  display: flex;
  gap: 12px;

  a{
    text-decoration: none;
  }
`;
