import { Button, Collapse, Nav, Navbar, NavbarToggler, NavItem } from 'reactstrap';
import logo from '../../assets/images/logo.svg';
import headerClose from '../../assets/images/header-close.svg';
import { NavLink } from 'react-router';
import LoginOrRegiserModal from './LoginOrRegiserModal';
import { useState } from 'react';

type Props = {};

export default function Header({}: Props) {
  const [modal, setModal] = useState(false);

  function toggleModal() {
    setModal(!modal);
  }

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <>
      <Navbar
        className={
          'header d-flex justify-content-center align-items-center' + (isOpen ? ' open' : '')
        }
        expand="lg"
        container
      >
        <NavLink to="/" className="me-0 navbar-brand">
          <img src={logo} alt="CourtsApp" />
        </NavLink>

        <NavbarToggler onClick={toggle} className="toggler-btn border-0">
          {isOpen && <img src={headerClose} alt="X" />}
        </NavbarToggler>

        <Collapse isOpen={isOpen} navbar className="fullscreen-collapse">
          <Nav className="fs-6 fw-medium mx-auto mt-lg-0 mt-3 gap-lg-4 text-center" navbar>
            <NavItem>
              <NavLink className="nav-link text-black py-lg-0 py-4 border-bottom" to="#">
                Book a Court
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="nav-link text-black py-lg-0 py-4 border-bottom" to="#">
                Open Play
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="nav-link text-black py-lg-0 py-4 border-bottom" to="#">
                Find Players
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="nav-link text-black py-lg-0 py-4" to="#">
                For Clubs
              </NavLink>
            </NavItem>
          </Nav>

          <Nav className="">
            <NavItem className="w-100">
              <Button
                color="primary"
                className="login-register-btn rounded-pill px-3 py-2 w-100"
                onClick={toggleModal}
              >
                Log In or Register
              </Button>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>

      <LoginOrRegiserModal modal={modal} toggleModal={toggleModal} />
    </>
  );
}
