import React from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";

type HeaderProps = {
  account?: string;
  balance?: string;
  image: any;
};
export const Header: React.FC<HeaderProps> = ({ account, balance, image }) => {
  return (
    <Navbar.Collapse id='responsive-navbar-nav'>
      <Nav className='mr-auto'>
        <LinkContainer to='/artists'>
          <Nav.Link>Artists</Nav.Link>
        </LinkContainer>
        <LinkContainer to='/register'>
          <Nav.Link>Register</Nav.Link>
        </LinkContainer>
      </Nav>
      <Nav>
        <NavDropdown title={image} id='basic-nav-dropdown' alignRight>
          <NavDropdown.Item href='#'>{account}</NavDropdown.Item>
          <NavDropdown.Item href='#'>{balance} ETH</NavDropdown.Item>
          <NavDropdown.Item
            href={`https://pay.sendwyre.com/purchase?destCurrency=ETH&redirectUrl=http://localhost:3000&dest=${account}`}
          >
            Fund account
          </NavDropdown.Item>
          <NavDropdown.Item href='/edit-profile'>Edit Profile</NavDropdown.Item>
        </NavDropdown>
      </Nav>
    </Navbar.Collapse>
  );
};
