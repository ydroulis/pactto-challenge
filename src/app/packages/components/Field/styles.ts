import styled from 'styled-components';

export const Field = styled.div`
display: flex;
flex-direction: column;
gap: 6px;

width: 100%;

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
