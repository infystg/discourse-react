import './header.scss';
import React, { Fragment, useState } from 'react';

import { Navbar, Nav, NavbarToggler, Collapse, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import LoadingBar from 'react-redux-loading-bar';

import { Brand } from './header-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faBell, faUser, faEnvelope, faBars, faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

export interface IHeaderProps {
  isAuthenticated: boolean;
  isAdmin: boolean;
}

const Header = (props: IHeaderProps) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <div id="app-header">
      <LoadingBar className="loading-bar" />
      <Navbar data-cy="navbar" expand="md" fixed="top" className="custom-navbar">
        <NavbarToggler aria-label="Menu" onClick={toggleMenu} />
        <Brand />
        <Collapse isOpen={menuOpen} navbar style={{ justifyContent: 'center', alignItems: 'center' }}>
          <Nav id="header-tabs" className="m-auto" navbar>
            {props.isAuthenticated ? (
              <div className="search-bar">
                <input className="nav-search" placeholder="Search topics" />
                <a href="#" className="search-btn">
                  <FontAwesomeIcon icon={faSearch} />
                </a>
              </div>
            ) : (
              ''
            )}
          </Nav>
          {props.isAuthenticated ? (
            <Fragment>
              <a href="#" style={{ fontSize: '1.25rem', color: '#fff' }}>
                <FontAwesomeIcon icon={faBell} />
              </a>
              <Dropdown isOpen={dropdown} toggle={() => setDropdown(!dropdown)}>
                <DropdownToggle caret className="circle">
                  {props.isAdmin ? 'A' : 'U'}
                </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem>
                    <FontAwesomeIcon icon={faUser} /> User
                  </DropdownItem>
                  <DropdownItem>
                    <FontAwesomeIcon icon={faEnvelope} /> Message
                  </DropdownItem>
                  {props.isAdmin ? (
                    <Link to="/categories">
                      <DropdownItem>
                        <FontAwesomeIcon icon={faBars} /> Categories
                      </DropdownItem>
                    </Link>
                  ) : (
                    ''
                  )}
                  <Link to="/logout">
                    <DropdownItem>
                      <FontAwesomeIcon icon={faArrowRightFromBracket} /> Logout
                    </DropdownItem>
                  </Link>
                </DropdownMenu>
              </Dropdown>
            </Fragment>
          ) : (
            ''
          )}
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
