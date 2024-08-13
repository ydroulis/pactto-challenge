'use client';

import React, { useState } from 'react';
import * as S from './styles';
import Image from 'next/image';
import logo from '../../assets/images/pactto-logo.png';
import avatarImg from '../../assets/images/avatar-placeholder.png';
import CloseIcon from '@mui/icons-material/Close';
import HouseIcon from '@mui/icons-material/House';
import ForumIcon from '@mui/icons-material/Forum';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import LinkIcon from '@mui/icons-material/Link';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import ViewCarouselIcon from '@mui/icons-material/ViewCarousel';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import SettingsIcon from '@mui/icons-material/Settings';
import MenuIcon from '@mui/icons-material/Menu';
import LogoutIcon from '@mui/icons-material/Logout';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Modal from '../Modal';
import UpgradeList from '../UpgradeList';

const Sidebar: React.FC = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);

  const handlePopoverOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const isActive = (path: string) => path === pathname;

  const open = Boolean(anchorEl);

  return (
    <>
      <S.SidebarContainer $isOpen={isOpen}>
        <div>
          <S.Header>
            <S.Buttons>
              {isOpen ? (
                <>
                  <S.LogoButton type="button">
                    <Image className="logo" src={logo} alt="Pactto logotype" />
                  </S.LogoButton>
                  <S.CloseButton onClick={() => setIsOpen(false)}>
                    <CloseIcon className="close" />
                  </S.CloseButton>
                </>
              ) : (
                <S.MenuButton onClick={() => setIsOpen(true)}>
                  <MenuIcon className="menu" />
                </S.MenuButton>
              )}
            </S.Buttons>
            <p className="title">{isOpen && 'Your Pactto profile'}</p>

            <S.Profile $isOpen={isOpen}>
              <S.SubscriptionDetails>
                <S.Avatar alt="Avatar image" src={avatarImg} $isOpen={isOpen} />
                {isOpen && (
                  <S.Upgrade>
                    <S.TrialPeriod>
                      <p className="trial">Trial: 11 Days Left</p>
                    </S.TrialPeriod>
                    <S.PacttoPro>
                      <p className="pro">Pactto Pro</p>
                      <button onClick={() => setIsModalOpen(true)}>
                        upgrade
                      </button>
                    </S.PacttoPro>
                  </S.Upgrade>
                )}
              </S.SubscriptionDetails>

              <h1>{isOpen && 'Yuri Lombardi Androulis'}</h1>
              <S.MemberInfo $isOpen={isOpen} className="member">
                {isOpen && 'Pactto member since 2024'}
              </S.MemberInfo>
            </S.Profile>
          </S.Header>
          <div>
            <S.NavigationMenu
              onMouseEnter={() => setIsOpen(true)}
              onMouseLeave={() => setIsOpen(false)}
            >
              <S.ListOptions>
                <li>
                  <Link
                    className={isActive('/home') ? 'active' : ''}
                    href="home"
                  >
                    <HouseIcon className="icon" />
                    <span>Home</span>
                  </Link>
                </li>
                <li>
                  <Link
                    className={isActive('/pacttos') ? 'active' : ''}
                    href="pacttos"
                  >
                    <ForumIcon className="icon" />
                    <span>Pacttos (Chats)</span>
                  </Link>
                </li>
                <li>
                  <Link
                    className={isActive('/videos-to-review') ? 'active' : ''}
                    href="videos-to-review"
                  >
                    <VideoLibraryIcon className="icon" />
                    <span>Items to review</span>
                  </Link>
                </li>
                <li>
                  <Link
                    className={isActive('/shared-links') ? 'active' : ''}
                    href="shared-links"
                  >
                    <LinkIcon className="icon" />
                    <span>Web links you created</span>
                  </Link>
                </li>
                <li>
                  <Link
                    className={isActive('/personal-info') ? 'active' : ''}
                    href="personal-info"
                  >
                    <ManageAccountsIcon className="icon" />
                    <span>Personal information</span>
                  </Link>
                </li>
                <li>
                  <Link
                    className={isActive('/packages') ? 'active' : ''}
                    href="packages"
                  >
                    <CardGiftcardIcon className="icon" />
                    <span>Review packages for sale</span>
                  </Link>
                </li>
                <li>
                  <Link
                    className={isActive('/profile') ? 'active' : ''}
                    href="profile"
                  >
                    <ViewCarouselIcon className="icon" />
                    <span>Pactto website</span>
                  </Link>
                </li>
                <li>
                  <Link
                    className={isActive('/libary') ? 'active' : ''}
                    href="libary"
                  >
                    <OndemandVideoIcon className="icon" />
                    <span>Reference video library</span>
                  </Link>
                </li>
                <li>
                  <Link
                    className={isActive('/subscription') ? 'active' : ''}
                    href="subscription"
                  >
                    <SubscriptionsIcon className="icon" />
                    <span>Subscription</span>
                  </Link>
                </li>
                <li>
                  <Link
                    className={isActive('/review-settings') ? 'active' : ''}
                    href="review-settings"
                  >
                    <SettingsIcon className="icon" />
                    <span>Review Settings</span>
                  </Link>
                </li>
              </S.ListOptions>
            </S.NavigationMenu>
            <S.Logout
              onMouseEnter={() => setIsOpen(true)}
              onMouseLeave={() => setIsOpen(false)}
            >
              <S.Button
                $isOpen={isOpen}
                onMouseEnter={handlePopoverOpen}
                onMouseLeave={handlePopoverClose}
              >
                {isOpen ? 'Logout' : <LogoutIcon sx={{ fontSize: '18px' }} />}
              </S.Button>
            </S.Logout>
            <Popover
              id="mouse-over-popover"
              sx={{
                pointerEvents: 'none',
              }}
              open={open}
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: 'center',
                horizontal: 'right',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              onClose={handlePopoverClose}
              disableRestoreFocus
            >
              <Typography sx={{ p: 1 }}>Logout</Typography>
            </Popover>
          </div>
        </div>
      </S.SidebarContainer>
      <Modal
        isOpen={isModalOpen}
        closeAction={() => setIsModalOpen(false)}
        buttonAction={() => setIsModalOpen(false)}
        width="550px"
        title="Upgrade"
        subtitle="By subscribing to the Pactto Pro plan for $9/month, you will be able to:"
        primaryBtn="Subscribe"
        secondaryBtn="Cancel"
      >
        <UpgradeList />
      </Modal>
    </>
  );
};

export default Sidebar;
