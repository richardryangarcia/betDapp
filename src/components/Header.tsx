import React from "react";
import { Navbar, Nav, Dropdown, NavDropdown, Image } from "react-bootstrap";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { Header } from "./HeaderDesktop";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { FlyoutMenu } from "./FlyoutMenu";
import { UserContext } from "../contexts/userProvider";
import logo from "../images/logo.svg";

export const HeaderMenu: React.FC = () => {
  const { imageHash, account, balance } = React.useContext(UserContext).state;

  const image = imageHash ? (
    <Image src={`https://ipfs.infura.io/ipfs/${imageHash}`} roundedCircle />
  ) : (
    <FontAwesomeIcon icon={faUserCircle} />
  );

  return (
    <Navbar
      id='navbar'
      fixed='top'
      collapseOnSelect
      expand='lg'
      bg='white'
      variant='light'
      className='main'
    >
      <Nav>
        <FlyoutMenu />
      </Nav>
      <Navbar.Brand>
        <img src={logo} alt='' height='25em' width='75em'></img>
      </Navbar.Brand>
      <Nav className='mobile'>
        <NavDropdown title={image} id='basic-nav-dropdown' alignRight>
          <NavDropdown.Item href='#'>
            <CopyToClipboard
              text={account}
              onCopy={() => console.log("copied")}
            >
              <span>{account}</span>
            </CopyToClipboard>
          </NavDropdown.Item>
          <NavDropdown.Item href='#'>{balance} ETH</NavDropdown.Item>
          <NavDropdown.Item
            href={`https://pay.sendwyre.com/purchase?destCurrency=ETH&redirectUrl=http://localhost:3000&dest=${account}`}
          >
            Fund account
          </NavDropdown.Item>
          <NavDropdown.Item href='/edit-profile'>Edit Profile</NavDropdown.Item>
        </NavDropdown>
      </Nav>
      <Header account={account} balance={balance} image={image} />
    </Navbar>
  );
};
