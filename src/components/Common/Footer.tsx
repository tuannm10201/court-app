import { Button, Col, Container, Row } from 'reactstrap';
import logo from '../../assets/images/logo.svg';
import { NavLink } from 'react-router';

type Props = {};

export default function Footer({}: Props) {
  return (
    <footer className="py-4">
      <Container className="mt-4 pb-2">
        <Row className="mb-4">
          <Col xs={6} md={3}>
            <h6 className="fw-semibold mb-0">Company</h6>
            <ul className="list-unstyled mt-4">
              <li>
                <NavLink className="nav-link mt-3" to="/">
                  About Us
                </NavLink>
              </li>
              <li>
                <NavLink className="nav-link mt-3" to="/">
                  Careers
                </NavLink>
              </li>
              <li>
                <NavLink className="nav-link mt-3" to="/">
                  Gift Cards
                </NavLink>
              </li>
              <li>
                <NavLink className="nav-link mt-3" to="/">
                  Rewards
                </NavLink>
              </li>
            </ul>
          </Col>
          <Col xs={6} md={3}>
            <h6 className="fw-semibold mb-0">Businesses</h6>
            <ul className="list-unstyled mt-4">
              <li>
                <NavLink className="nav-link mt-3" to="/">
                  Clubs
                </NavLink>
              </li>
              <li>
                <NavLink className="nav-link mt-3" to="/">
                  Book Court
                </NavLink>
              </li>
              <li>
                <NavLink className="nav-link mt-3" to="/">
                  Facilities
                </NavLink>
              </li>
            </ul>
          </Col>
          <Col xs={6} md={3} className="mt-md-0 mt-4">
            <h6 className="fw-semibold mb-0">Resources</h6>
            <ul className="list-unstyled mt-4">
              <li>
                <NavLink className="nav-link mt-3" to="/">
                  Blog
                </NavLink>
              </li>
              <li>
                <NavLink className="nav-link mt-3" to="/">
                  Case Studies
                </NavLink>
              </li>
            </ul>
          </Col>
          <Col xs={6} md={3} className="mt-md-0 mt-4">
            <h6 className="fw-semibold mb-0">Legal</h6>
            <ul className="list-unstyled mt-4">
              <li>
                <NavLink className="nav-link mt-3" to="/">
                  Privacy Policy
                </NavLink>
              </li>
              <li>
                <NavLink className="nav-link mt-3" to="/">
                  Terms of Service
                </NavLink>
              </li>
            </ul>
          </Col>
        </Row>
        <hr className="opacity-100 mt-3 pb-2" />
        <div className="mt-4 d-flex justify-content-between align-items-center">
          <NavLink to="/">
            <img src={logo} alt="CourtsApp" className="logo" />
          </NavLink>
          <div className="d-flex gap-2">
            <Button outline className="social-btn rounded-circle">
              <i className="bi bi-instagram fs-5" />
            </Button>
            <Button outline className="social-btn rounded-circle">
              <i className="bi bi-twitter-x fs-5" />
            </Button>
            <Button outline className="social-btn rounded-circle">
              <i className="bi bi-youtube fs-5" />
            </Button>
          </div>
        </div>
      </Container>
    </footer>
  );
}
