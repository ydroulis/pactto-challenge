import styled from 'styled-components';

export const VideoCard = styled.div`
width: 211.5px;
height: 246px;

position: relative
`;

export const Menu = styled.button`
width: 40px;
height: 40px;

position: absolute;
top: 0px;
right: 0px;

border-radius: 50%;

background-color: transparent;

border: none;

cursor: pointer;

.menu{
  color: #FFFFFF;
}

&:hover{
  background-color: rgba(63, 63, 63, .5);
}
`;

export const CoverImg = styled.div`
width: 100%;
height: 134px;

background-color: #000000;

.cover{
 width: 100%;
 height: 100%;
}
`;

export const VideoDetails = styled.div`
width: 100%;
height: 110px;

display: flex;
flex-direction: column;
background-color: #121212;

padding: 12px;
box-sizing: border-box;

h2, p {
  width: 100%;
}

h2 {
  font-size: 17px;
  color: #FFFFFF;

  word-wrap: break-word;
}

p {
  font-size: 12px;
  color: #FFF9;

  margin-top: 10px;
}
`;
