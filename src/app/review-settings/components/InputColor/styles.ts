import styled from 'styled-components';

interface IColor {
  color: string;
}

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
