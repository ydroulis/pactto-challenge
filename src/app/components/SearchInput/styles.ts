import styled from 'styled-components';

export const SearchInput = styled.div`
width: 100%;
height: 54px;

display: flex;
align-items: center;

margin-bottom: 20px;

.glass{
  color: #FFFFFF;

  position: absolute;
  right: 44px;
}
`;

export const Input = styled.input`
width: 100%;
height: 100%;

padding: 0px 0px 0px 16px;

background-color: transparent;

border: none;

color: #E2E2E3;
font-weight: 700;
font-size: 16px;

outline: none;

border-radius: 4px;

border: rgba(226, 226, 227, 0.7) solid 1px;

&:hover {
  border: rgba(226, 226, 227, 1) solid 1px;
}

&::placeholder {
  color: #A7A7A8;
  font-weight: 400;
  font-size: 16px;
}

&:focus{
  border: #1DBBA5 2px solid;
}
`;
