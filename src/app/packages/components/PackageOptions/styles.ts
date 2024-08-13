import styled from 'styled-components';

export const Package = styled.div`
width: 100%;
`;

export const Actions = styled.div`
width: 100%;
display: flex;

color: #B8B8B8;
font-size: 14px;
`;

export const Publish = styled.div`
display: flex;
align-items: center;
gap: 5px;

cursor: pointer;

div{
  margin-top: 7px;
}
`;

export const Delete = styled.div`
display: flex;
align-items: center;
gap: 5px;

cursor: pointer;
`;

export const PackageSettings = styled.div`
width: 100%;
min-height: fit-content;

display: flex;
gap: 32px;

border: 1px solid #1DBBA5;

color: #E3E3E3;

margin-bottom: 32px;
padding: 24px;
box-sizing: border-box;

background-color: #181818;
`;

export const Column = styled.div`
display: flex;
flex-direction: column;
gap: 10px;

width: 100%;

.primary{
  width: 248.56px;
  margin: 0 auto;
}
`;

export const ColumnHeader = styled.div`
min-height: 30px;

display: flex;
align-items: center;
justify-content: center;

margin-bottom: 25px;
border-bottom: solid 2px #1DBBA5;

h2{
  font-size: 14px;
  font-weight: 700;
  letter-spacing: .26px;
  text-align: center;

  line-height: 30px;
}
`;

export const Description = styled.div`
margin-bottom: 25px;

p{
  font-size: 14px;
  line-height: 18px;
  letter-spacing: .26px;
  opacity: .8;

  text-align: center;
}

a{
  color: #1DBBA5;
  text-decoration: none;

  cursor: pointer;
}
`;

export const Form = styled.form`
display: flex;
flex-direction: column;
gap: 10px;
`;

export const Field = styled.div`
display: flex;
flex-direction: column;
gap: 6px;

margin-bottom: 22px;

p{
  color: #E3E3E3;
  font-weight: 700;
  font-size: 14px;
  letter-spacing: .26px;
}

a{
  text-decoration: none;
  color: #1DBBA5;
  font-weight: 700;

  margin-top: 8px;
}

.info{
  font-size: 12px;
  line-height: 14px;
  font-weight: 200;
  letter-spacing: .19px;
  color: #e3e3e3;
  opacity: .8;
}
`;

export const RowField = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
position: relative;

padding-bottom: 22px;

& > p{
  font-size: 14px;
  opacity: .8;
  position: absolute;
  right: 134px;
}

span{
  font-size: 14px;
  font-weight: 700;
}

.title{
  font-size: 14px;
  line-height: 18px;
  letter-spacing: .26px;
  color: #e3e3e3;
  opacity: .8;
}

.container{
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2px;
}

.container a{
  color: #1DBBA5;
  text-decoration: none;
  font-size: 14px;
}
`;

export const TextInput = styled.input`
width: 100%;
height: 42px;

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

export const NumberInput = styled.input`
width: 110px;
height: 42px;

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

export const TextareaInput = styled.textarea`
width: 100%;

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

export const Info = styled.div`
margin-bottom: 25px;
p{
  font-size: 14px;
  text-align: center;
  line-height: 18px;
  letter-spacing: .26px;
  color: #e3e3e3;
  opacity: .8;
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
