import styled from 'styled-components';
import Image from 'next/image';

interface ISidebar {
  $isOpen: boolean;
}

export const SidebarContainer = styled.aside<ISidebar>`
width: ${(props) => (props.$isOpen ? '277.08px' : '90px')};
height: 100vh;

box-sizing: border-box;

background-color: #2F2F2F;

position: relative;

transition: all 0.3s ease-out;

z-index: 99;

.title{
  min-width: ${(props) => (props.$isOpen ? '242px' : '0px')};
}

p, h1 {
  min-width: 240px;
  opacity: ${(props) => (props.$isOpen ? '1' : '0')};
  transition: all 0.3s ease-out;
}

span{
  min-width: 200px;
  opacity: ${(props) => (props.$isOpen ? '1' : '0')};
  transition: all 0.3s ease-out;
}
`;

export const Buttons = styled.div`
display: flex;

height: 50px;
`;

export const Header = styled.header`
padding: 32px 32px 0px 32px;

p {
  width: fit-content;
  height: 24px;
  text-transform: uppercase;

  font-size: 14px;
  font-weight: 700;

  padding-top: 16px;

  color: #545454;
}
`;

export const LogoButton = styled.button`
background-color: transparent;
border: none;

position: relative;
right: 6px;
bottom: 1px;

.logo {
  width: 140px;
  height: 45px;
}
`;

export const CloseButton = styled.button`
min-height: 40px;
min-width: 40px;

background-color: transparent;
border-color: transparent;

position: absolute;
top: 33px;
right: 8px;

transition: all 0.3s ease-out;

cursor: pointer;

border-radius: 50%;

.close {
  color: #ffffff;
}

&:hover{
  background-color: #3f3f3f;
}
`;

export const MenuButton = styled.button`
height: 40px;
min-width: 40px;

background-color: transparent;
border-color: transparent;

position: absolute;
left: 50%;

transform: translateX(-50%);

transition: all 0.3s ease-out;

cursor: pointer;

padding: 0px;

color: #ffffff;

border-radius: 50%;

&:hover{
  background-color: #3f3f3f;
}

`;

export const Profile = styled.div<ISidebar>`
display: flex;
flex-direction: column;

width: 100%;

h1{
  min-width: ${(props) => (props.$isOpen ? '240px' : '0px')};

  height: 20px;
  margin-top: 21px;

  font-size: 20px;
  color: #FFFFFF;
}
`;

export const SubscriptionDetails = styled.div`
display: flex;
align-items: center;

margin: 37px 0px 12px 0px;
`;

export const Avatar = styled(Image)<ISidebar>`
width: 40px;
height: 40px;

transition: all 0.3s ease-out;

${(props) => (props.$isOpen ? 'transform: translateX(0px)' : 'transform: translateX(-5px)')};

border-radius: 50%;

cursor: pointer;

`;

export const Upgrade = styled.div`
display: flex;
flex-direction: column;
justify-content: center;

margin-left: 10px;
margin-bottom: 5px;
`;

export const TrialPeriod = styled.div`
p{
  height: 7px;
  padding: 0px;

  color: #9C9C9C;
  font-size: 7px;
  font-weight: 700;

  margin-bottom: 3px;
  letter-spacing: .5px;
  line-height: 7px;
}
`;

export const PacttoPro = styled.div`
display: flex;
justify-content: space-between;

width: 142px;

p{
  display: flex;
  align-items: center;
  justify-content: center;

  min-width: 88.38px;
  height: 24px;

  background-color: #1DBBA5;

  color: #FFFFFF;
  font-size: 12px;
  line-height: 12px;
  font-weight: 500;
  letter-spacing: .5px;

  margin: 0px;
  padding: 0px;

  border-radius: 3px;
}

button{
  background-color: transparent;

  border: none;

  color: #767676;
  font-size: 12px;

  text-decoration: underline;
  text-transform: none;

  cursor: pointer;

  padding: 0px;
  margin-left: 10px;

  transition: all 0.3s ease-out;

  &:hover{
    opacity: .9;
  }
}
`;

export const MemberInfo = styled.span<ISidebar>`
height: 14px;
min-width: ${(props) => (props.$isOpen ? '213.08x !important' : '0px! important')};

color: #ACACAC;
font-size: 14px;
font-weight: 400px;
letter-spacing: .25px;

margin-top: 8px;
`;

export const NavigationMenu = styled.nav`
width: 100%;
height: 220px;

padding: 8px 0px 4px 0px;

margin-top: 15px;

overflow-y: scroll;
overflow-x: hidden;

&::-webkit-scrollbar {
    display: none;
  }

&:hover{
  &::-webkit-scrollbar {
    width: 5px;
    display: block;
  }

  &::-webkit-scrollbar-thumb {
    background-color: darkgrey;
    outline: 1px solid slategrey;
    border-radius: 5px;
  }
}
`;

export const ListOptions = styled.ul`
width: 100%;

li{
 width: 100%;
 height: 48px;

 .active{
    background-color: #3A363F;
    color: #2FC0AC;
  }
}

 a{
  display: flex;
  align-items: center;

  width: 100%;
  height: 100%;

  color: #B8B8B8;
  text-decoration: none;
  font-size: 14px;

  padding: 0px 32px;
  box-sizing: border-box;

  transition: all 0.3s ease-out;

  &:hover{
    background-color: #3F3F3F;
  }

  &:active {
    color: #B8B8B8;
    background-color: #2F2F2F;
  }
}

a .icon{
  font-size: 24px;

  margin-right: 12px;
}
`;

export const Logout = styled.div`
width: 100%;

padding: 20px 32px 16px 32px;
box-sizing: border-box;
`;

export const Button = styled.button<ISidebar>`
display: flex;
justify-content: center;
align-items: center;

background-color: #B8B8B8;

width: 100%;
height: ${(props) => (props.$isOpen ? '48px' : '26px')};

border-radius: 24px;

border: none;

font-size: 14px;
color: #181818;
line-height: 48px;
font-weight: 700;
text-transform: uppercase;
letter-spacing: 1px;

cursor: pointer;

transition: all 0.3s ease-out;

&:hover{
  background-color: #C7C5C5;
}
`;
