import styled from 'styled-components';

interface ISavedProps {
  isOpen: boolean;
}

export const Form = styled.form`
width: 100%;
max-width: 700px;

display: flex;
flex-direction: column;

margin-top: 96px;

.error{
  width: 100%;
  height: 22px;

  display: flex;
  align-items: center;

  color: #BA1D32;
  font-size: 12px;
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

export const UserPassword = styled.div`
p{
  margin: 32px 0px 8px 0px;
}
`;
