import styled from 'styled-components';

export const Main = styled.main`
width: 100%;
max-height: 100vh;

overflow-y: auto;

display: flex;
flex-direction: column;
gap: 32px;

overflow-y: hidden;
overflow-x: hidden;

position: relative;

color: #FFFFFF;

padding: 41px 35px;
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

export const TrialDays = styled.div`
color: #6E6E6E;
font-size: 14px;
letter-spacing: .14px;

span{
  color: #FFFFFF;
  font-size: 14px;
}
`;

export const Button = styled.button`
width: 312px;
min-height: 48px;

display: flex;
align-items: center;
gap: 8px;
justify-content: center;

color: #232225;
text-transform: uppercase;
font-weight: 700;
font-size: 14px;
letter-spacing: 1px;

border-radius: 24px;


border: none;

cursor: pointer;

.add{
  font-size: 20px;
}

background-color: #B8B8B8;

&:hover{
  background-color: #BEBEBE;
}
`;

export const Allow = styled.div`
font-size: 14px;
letter-spacing: .14px;
color: #e2e2e2;
`;

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
