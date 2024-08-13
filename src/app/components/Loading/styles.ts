import styled, { keyframes } from 'styled-components';

const move = keyframes`
  0% {
    transform: translateX(-100%);
  }
  50% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(100%);
  }
`;

export const Loading = styled.div`
margin-top: 10px;

width: 100%;

display: flex;
flex-direction: column;
align-items: center;
justify-content: center;

p{
  color: #FFFFFF;
  font-size: 16px;
  margin-bottom: 8px;
}
`;

export const LoadingBar = styled.div`
width: 100%;

background-color: #224744;

height: 5px;
overflow: hidden;
position: relative;
`;

export const Bar = styled.div`
width: 700px;
height: 100%;

background-color: #1DBBA5;

animation: ${move} .8s infinite linear;
position: absolute;
top: 0;
left: 0;
`;
