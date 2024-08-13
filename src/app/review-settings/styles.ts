import styled from 'styled-components';

interface IColor {
  color: string;
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
justify-content: space-between;
gap: 12px;

box-sizing: border-box;

position: absolute;
left: 0px;
top: 0px;

padding: 24px 32px;

background-color: #232225;

z-index: 9;

h1{
  height: 40px;

  color: #FFFFFF;
  font-size: 20px;
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
justify-content: space-between;
gap: 12px;

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

&:disabled{
  background-color: #3E3D3F;
  color: #232225;

  cursor: default;
}
`;

export const Content = styled.div`
margin-top: 70px;

display: flex;
flex-direction: column;
gap: 16px;
`;

export const Brush = styled.div`
height: 48px;

display: flex;
align-items: center;
gap: 24px;

p{
  letter-spacing: 1px;
}
`;

export const NoteColor = styled.div`
margin-top: 20px;
p{
  margin-bottom: 14px;
}
`;

export const Inputs = styled.div`
display: flex;
gap: 8px;

`;

export const InputColor = styled.div`
position: relative;

width: 128px;
`;

export const Color = styled.div<IColor>`
width: 18px;
height: 18px;

border-radius: 50%;

position: absolute;
top: 50%;
right: 10px;

transform: translateY(-50%);

background: ${(props) => props.color};
`;

export const SelectInputs = styled.div`
display: flex;
gap:24px;

margin-top: 22px;

p{
  color: #EEEEEE;
  font-size: 14px;
  height: 30px;
}
`;

export const ReplaceImage = styled.div`
width: 164px;

display: flex;
flex-direction: column;
gap: 16px;

position: absolute;
right: 32px;
top: 100px;

p{
  font-size: 12px;
  color: #ffffffd9;
  text-decoration: underline;
  opacity: 30%;
  text-align: center;
}
`;

export const Image = styled.div`
background-color: #000000;
width: 100%;
height: 160px;

display: flex;
justify-content: center;
align-items: center;

.logo{
  width: 140px;
  height: 140px;
}
`;
