import styled from 'styled-components';

export const List = styled.ul`
color: #E2E2E2;
font-size: 14px;
margin-top: 12px;

li{
  min-height: 32px;
  display: flex;
  align-items: center;
  gap: 10px;
}

li .check{
  color: #1DBAA5;
  font-size: 20px;
}

li span{
  font-weight: 700;
}

li p{
  white-space: nowrap;
  margin-left: 4px;
}

li a{
  color: #E2E2E2;
   white-space: nowrap;
  margin-left: 4px;
  cursor: pointer;

  &:hover{
    color: #1DBAA5;
  }
}
`;
