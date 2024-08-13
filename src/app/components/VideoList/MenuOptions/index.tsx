import React from 'react';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { MdDraw } from 'react-icons/md';
import EditIcon from '@mui/icons-material/Edit';
import { FaShare } from 'react-icons/fa';
import DeleteIcon from '@mui/icons-material/Delete';
import MenuItem from '@mui/material/MenuItem';
import Menu, { MenuProps } from '@mui/material/Menu';
import styled from 'styled-components';
import { PopoverVirtualElement } from '@mui/material';

const StyledMenu = styled((props: MenuProps) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: 'top',
      horizontal: 'left',
    }}
    transformOrigin={{
      vertical: 'bottom',
      horizontal: 'left',
    }}
    {...props}
  />
))(() => ({
  '& .MuiPaper-root': {
    backgroundColor: '#424242',
    borderRadius: 6,
    width: '149.43px',
    color: '#FCFCFC',
    boxShadow:
      'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
    '& .MuiMenu-list': {
      padding: '4px 0',
    },
    '& .MuiMenuItem-root': {
      fontFamily: '__Roboto_b0d14b',
      fontSize: 14,
      height: '48px',
      '&:hover': {
        backgroundColor: '#515151',
      },
      '& .MuiSvgIcon-root, .icon': {
        fontSize: 28,
        color: '#FCFCFC',
        marginRight: '16px',
      },
    },
  },
}));

interface IMenuOptionProps {
  anchorEl:
    | Element
    | (() => Element)
    | PopoverVirtualElement
    | (() => PopoverVirtualElement)
    | null
    | undefined;
  handleClose: () => void;
  open: boolean;
}

const MenuOptions: React.FC<IMenuOptionProps> = ({
  anchorEl,
  handleClose,
  open,
}) => {
  return (
    <StyledMenu
      id="demo-customized-menu"
      MenuListProps={{
        'aria-labelledby': 'demo-customized-button',
      }}
      anchorEl={anchorEl}
      open={open}
      onClose={handleClose}
    >
      <MenuItem onClick={handleClose} disableRipple>
        <VisibilityIcon />
        View
      </MenuItem>
      <MenuItem onClick={handleClose} disableRipple>
        <MdDraw className="icon" />
        Review
      </MenuItem>
      <MenuItem onClick={handleClose} disableRipple>
        <EditIcon />
        Edit info
      </MenuItem>
      <MenuItem onClick={handleClose} disableRipple>
        <FaShare className="icon" />
        Share video
      </MenuItem>

      <MenuItem onClick={handleClose} disableRipple>
        <DeleteIcon />
        Delete
      </MenuItem>
    </StyledMenu>
  );
};

export default MenuOptions;
