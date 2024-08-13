import styled from 'styled-components';

export const Main = styled.main`
width: 100%;

display: flex;
flex-direction: column;

position: relative;

color: #FFFFFF;

padding: 32px;

.noFound{
  color: #FFFFFF;
  font-size: 16px;
  margin: 0 auto;
}

.primary{
  background-color: #1DBBA5;

  &:hover{
    background-color: #1BAC98;
  }
}
`;

export const Title = styled.div`
width: 100%;

display: flex;
justify-content: space-between;
margin: 21.440px 0px;

box-sizing: border-box;

  h1{
    font-size: 32px;
    font-weight: 700;
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

position: absolute;

top: 32px;
right: 32px;

border-radius: 24px;

border: none;

cursor: pointer;

.add{
  font-size: 20px;
}
`;

export const Info = styled.p`
margin: 13px 0px 18px 0px;

color: #6E6E6E;
font-size: 14px;
`;
