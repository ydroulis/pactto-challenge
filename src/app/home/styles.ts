import styled from 'styled-components';

interface IOnboarding {
  $isOpen: boolean;
}

export const HomeView = styled.div`
display: flex;
flex-direction: column;

position: relative;
width: 100%;

box-sizing: border-box;
`;

export const Onboarding = styled.div<IOnboarding>`
display: grid;

transition: all 0.3s ease-out;

width: 100%;

height: ${(props) => (props.$isOpen ? '210px' : '90px')};

background-color: #232225;

padding: 32px;
box-sizing: border-box;

overflow: hidden;

box-shadow: 3px 0px 5px 1px rgba(184,184,184,0.5);

border-radius: 0px 0px 8px 8px;

position: absolute;

z-index: 9;

h1{
    height: 32px;

    font-size: 20px;
    font-weight: 500;
    color: #FFFFFF;

    padding-bottom: 20px;
    margin-top: 7px;
}

p {
  color: #B8B8B8;
  font-size: 14px;
  font-weight: 500;
}

a {
  color: #1DBBA5;
}

a:visited {
  color: #1DBBA5;
}
`;

export const Progress = styled.div<IOnboarding>`
display: flex;
align-items: center;
gap: 16px;
justify-self: flex-end;

color: #ffffff;

margin-top: 32px;

transition: all 0.3s ease-out;

position: absolute;
top: 0px;
right: 16px;

p{
  color: #ffffff;
  font-size: 20px;
}
`;

export const iconButton = styled.button<IOnboarding>`
display: flex;
justify-content: center;
align-items: center;

min-height: 40px;
max-width: 40px;

background-color: transparent;
border-color: transparent;

transition: all 0.3s ease-out;

cursor: pointer;

border-radius: 50%;

.icon{
  font-size: 32px;
  color: #FFFFFF;

  transition: all .3s ease-out;

  transform: ${(props) => (props.$isOpen ? 'rotate(0deg)' : 'rotate(180deg)')}
}

&:hover{
  background-color: #3f3f3f;
}`;

export const Main = styled.main`
width: 100%;

display: flex;
flex-direction: column;

position: relative;

`;

export const Title = styled.div`
width: 100%;

display: flex;
justify-content: space-between;

margin-top: 85px;
padding: 32px;
margin-bottom: 5.440px;

box-sizing: border-box;

  h1{
    color: #FFFFFF;
    font-size: 32px;
    font-weight: 700;
  }
`;

export const Button = styled.button`
  background-color: #1BAC98;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  width: 200.3px;
  height: 48px;

  border-radius: 24px;

  border: none;

  color: #232225;
  font-size: 14px;
  font-weight: 700;

  text-transform: uppercase;

  letter-spacing: 1px;

  cursor: pointer;

  .add{
    font-size: 18px;
  }

  &:hover {
    opacity: 0.9;
  }
`;
