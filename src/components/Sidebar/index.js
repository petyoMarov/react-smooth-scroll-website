import React from 'react';
import PropTypes from 'prop-types';
import {
  CloseIcon,
  Icon,
  SidebarBtnWrapper,
  SidebarContainer,
  SidebarLink,
  SidebarMenu,
  SidebarRoute,
  SidebarWrapper,
} from './SidebarElements';

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="about" onClick={toggle}>
            About
          </SidebarLink>
          <SidebarLink to="discover" onClick={toggle}>
            Discover
          </SidebarLink>
          <SidebarLink to="services" onClick={toggle}>
            Services
          </SidebarLink>
          <SidebarLink to="signup" onClick={toggle}>
            Sign Up
          </SidebarLink>
        </SidebarMenu>
        <SidebarBtnWrapper>
          <SidebarRoute to="/signin">Sign In</SidebarRoute>
        </SidebarBtnWrapper>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

Sidebar.propTypes = {
  isOpen: PropTypes.bool,
  toggle: PropTypes.string,
};

export default Sidebar;
