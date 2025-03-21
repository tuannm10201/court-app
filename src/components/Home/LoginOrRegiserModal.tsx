import { Button, Form, FormGroup, Input, Label, Modal, ModalBody, ModalHeader } from 'reactstrap';
import logoGoogle from '../../assets/images/logo-google.svg';
import loginRegisterThumbnail from '../../assets/images/login-register-thumbnail.png';
import { NavLink } from 'react-router';

type Props = {
  modal: boolean;
  toggleModal: () => void;
};

export default function LoginOrRegiserModal({ modal, toggleModal }: Props) {
  return (
    <Modal
      isOpen={modal}
      toggle={toggleModal}
      centered
      fullscreen="lg"
      wrapClassName="login-register-modal"
    >
      <img
        src={loginRegisterThumbnail}
        alt="login-register-thumbnail"
        className="d-block d-lg-none"
      />
      <ModalHeader toggle={toggleModal} className="border-0 mt-lg-4">
        Find, Book, and Play – <br /> It's That Simple!
      </ModalHeader>
      <ModalBody className="d-flex flex-column align-items-center">
        <Form>
          <FormGroup>
            <Label className="fw-semibold" for="email">
              Email address
            </Label>
            <Input type="email" id="email" placeholder="Enter your email address" />
          </FormGroup>
          <FormGroup>
            <Label className="fw-semibold" for="password">
              Password
            </Label>
            <Input type="password" id="password" placeholder="Enter your password" />
          </FormGroup>
          <FormGroup check className="mt-3">
            <Input className="" type="checkbox" id="keepLoggedIn" />
            <Label className="fw-semibold" for="keepLoggedIn" check>
              Keep me logged in
            </Label>
          </FormGroup>
          <Button
            color="primary"
            block
            className="rounded-pill mt-4 py-lg-3 py-2 fs-5-5 fw-semibold"
          >
            Log In with Email
          </Button>
          <Button
            outline
            block
            className="google-login-btn border-0 rounded-pill mt-4 py-lg-3 py-2 fs-5-5 fw-semibold d-flex align-items-center gap-2 justify-content-center"
          >
            <img src={logoGoogle} alt="Google" />
            Log In with Google
          </Button>
        </Form>
        <p className="text-center mt-3" style={{ color: 'rgba(92, 95, 97, 1)' }}>
          Don't have an account?
          <NavLink className="color-green ms-2 text-decoration-none fw-semibold" to="/">
            Sign Up
          </NavLink>
        </p>
      </ModalBody>
    </Modal>
  );
}
