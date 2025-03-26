import { FormFeedback, FormGroup, Input, InputGroup, InputGroupText, Label } from 'reactstrap';
import { useState } from 'react';
import OnboardingForm from './OnboardingForm';
import { useDispatch, useSelector } from '../../hooks/useStore';
import { changeEmailPassword } from '../../store/onboardingSlice';

type Props = {};

export default function SetupAccountForm({}: Props) {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const { email, password } = useSelector((state) => state.onboarding);
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    email,
    password,
    confirmPassword: '',
  });

  const [inputValid, setInputValid] = useState({
    email: true,
    password: true,
    confirmPassword: true,
  });

  const isSubmitDisabled = !(
    formData.email.trim() &&
    formData.password.trim() &&
    formData.confirmPassword.trim() &&
    formData.password === formData.confirmPassword
  );

  function handleBlur(e: React.FormEvent<HTMLInputElement>) {
    const { id } = e.target as HTMLInputElement;
    setInputValid((prev) => ({ ...prev, [id]: true }));
  }

  function handleInput(e: React.FormEvent<HTMLInputElement>) {
    const { id, value } = e.target as HTMLInputElement;
    setFormData((prev) => ({ ...prev, [id]: value }));
    setInputValid((prev) => ({ ...prev, [id]: true }));
  }

  function handleSubmit() {
    const isValidEmail = /\S+@\S+\.\S+/.test(formData.email);
    const isPasswordMatch =
      !!formData.password &&
      !!formData.confirmPassword &&
      formData.password === formData.confirmPassword;

    setInputValid({
      email: isValidEmail,
      password: !!formData.password,
      confirmPassword: isPasswordMatch,
    });

    if (!isValidEmail || !isPasswordMatch) {
      throw Error();
    }

    dispatch(changeEmailPassword({ email: formData.email, password: formData.password }));
  }

  return (
    <OnboardingForm onSubmit={handleSubmit} isSubmitDisabled={isSubmitDisabled}>
      <FormGroup>
        <Label className="fw-semibold" for="email">
          Email address
        </Label>
        <Input
          bsSize="lg"
          type="email"
          id="email"
          placeholder="Enter your email address"
          value={formData.email}
          invalid={!inputValid.email}
          onBlur={handleBlur}
          onInput={handleInput}
        />
        <FormFeedback>{formData.email ? 'Email is invalid' : 'Email is required'}</FormFeedback>
      </FormGroup>

      <FormGroup>
        <Label className="fw-semibold" for="password">
          Password
        </Label>
        <InputGroup size="lg">
          <Input
            type={showPassword ? 'text' : 'password'}
            id="password"
            placeholder="Enter your password"
            className="pw-input"
            value={formData.password}
            onBlur={handleBlur}
            invalid={!inputValid.password}
            onInput={handleInput}
          />
          <InputGroupText
            role="button"
            className="bg-white"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <i className="bi bi-eye" /> : <i className="bi bi-eye-slash" />}
          </InputGroupText>
          <FormFeedback>Password is required</FormFeedback>
        </InputGroup>
      </FormGroup>

      <FormGroup>
        <Label className="fw-semibold" for="confirmPassword">
          Confirm Password
        </Label>
        <InputGroup size="lg">
          <Input
            type={showConfirmPassword ? 'text' : 'password'}
            id="confirmPassword"
            placeholder="Re-enter your password"
            className="pw-input"
            onBlur={handleBlur}
            invalid={!inputValid.confirmPassword}
            onInput={handleInput}
          />
          <InputGroupText
            role="button"
            className="bg-white"
            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
          >
            {showConfirmPassword ? <i className="bi bi-eye" /> : <i className="bi bi-eye-slash" />}
          </InputGroupText>
          <FormFeedback>
            {formData.confirmPassword
              ? 'Confirm password do not match'
              : 'Confirm password is required'}{' '}
          </FormFeedback>
        </InputGroup>
      </FormGroup>
    </OnboardingForm>
  );
}
