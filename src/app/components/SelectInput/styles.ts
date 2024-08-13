import styled from 'styled-components';

interface ISelectProps {
  $isOpen: boolean;
}

export const SelectInput = styled.div`
position: relative;
z-index: 1;
`;

export const Field = styled.div<ISelectProps>`
height: 48px;

display: flex;
align-items: center;

background-color: ${(props) => (props.$isOpen ? '#636264' : '#FFFFFF1A')};

cursor: pointer;

padding: 12px;
box-sizing: border-box;

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
  background-color: ${(props) => !props.$isOpen && '#474649'};
}
`;

export const Options = styled.div<ISelectProps>`
width: 100%;
height: ${(props) => (props.$isOpen ? '210px' : '0px')};

display: flex;
flex-direction: column;

background-color: #424242;

position: absolute;
top: ${(props) => (props.$isOpen ? '-210px' : '0px')};;
left: 0px;

transition: all 0.3s ease-out;

padding: ${(props) => (props.$isOpen ? '8px 0px' : '0px')};
box-sizing: border-box;

overflow-y: scroll;

z-index: 999999999999 !important;

.selected{
  background-color: #FFFFFF14;
}

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
height: 100%;

display: ${(props) => (props.$isOpen ? 'flex' : 'none')};

position: absolute;
top: 0px;
left: 0px;

background-color: transparent;
`;
