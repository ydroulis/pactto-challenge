import styled from 'styled-components';

export const Container = styled.div`
margin-bottom: 28px;
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

export const Tag = styled.div`
width: 100%;
height: 42px;

display: flex;
align-items: center;
justify-content:space-between;

margin-bottom: 22px;
padding: 12px;
box-sizing: border-box;
border: none;

background-color: #FFFFFF1A;

outline: none;

color: #FFFFFF;
font-size: 16px;

button{
  border: none;
  background-color: transparent;
}

.close{
  margin-top: 2px;
  font-size: 16px;
  color: #9C9C9D;

  cursor: pointer;
}
`;
