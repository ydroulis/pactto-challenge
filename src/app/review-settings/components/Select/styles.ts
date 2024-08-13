import styled from 'styled-components';

interface ISelectProps {
  $isOpen: boolean;
}

export const SelectInput = styled.div`
position: relative;
z-index: 1;

width: 212px;
`;

export const Field = styled.div<ISelectProps>`
height: 48px;

display: flex;
align-items: center;

background-color: transparent;

cursor: pointer;

padding: 12px;
box-sizing: border-box;

border-radius: 5px;

border: ${(props) => (props.$isOpen ? '2px solid #1DBBA5 !important' : '1px solid #9A9A9B')};

p{
  font-size: 16px;
  color: #E7E7E7;
}

.iconDown{
  position: absolute;
  right: 8px;
  top: 50%;

  color: ${(props) => (props.$isOpen ? '#26B09D' : '#AAAAAB')};

  transform: translateY(-50%);
}

&:hover{
 border: #E2E2E3 solid 1px;
}
`;

export const Options = styled.div<ISelectProps>`
width: 66px;
height: ${(props) => (props.$isOpen ? '64px' : '0px')};

display: flex;
flex-direction: column;

background-color: #424242;

position: absolute;
top: ${(props) => (props.$isOpen ? '-64px' : '0px')};;
left: 0px;

transition: all 0.3s ease-out;

padding: ${(props) => (props.$isOpen ? '8px 0px' : '0px')};
box-sizing: border-box;

border-radius: 5px;

z-index: 999999999999;

.selected{
  background-color: #FFFFFF14;
}

`;

export const Item = styled.div<ISelectProps>`
width: 100%;
height: 48px;
min-height: 48px;

display: ${(props) => (props.$isOpen ? 'flex' : 'none')};
align-items: center;
justify-content: space-between;

padding: 0px 16px;
box-sizing: border-box;

cursor: pointer;

p{
  font-size: 16px;
  color: #E7E7E7;
}

.check{
  color: #1DBBA5;
}

&:hover{
  background-color: #515151;
}
`;

export const Overlay = styled.div<ISelectProps>`
width: 100%;
height: calc(100% + 80px);

display: ${(props) => (props.$isOpen ? 'flex' : 'none')};

position: absolute;
top: 0px;
left: 0px;

background-color: transparent;

z-index:9;
`;
