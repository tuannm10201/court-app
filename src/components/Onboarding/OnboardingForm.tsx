import { useNavigate } from 'react-router';
import { Form, Button } from 'reactstrap';
import { backStep, nextStep } from '../../store/onboardingSlice';
import { useDispatch } from '../../hooks/useStore';

type Props = {
  isSubmitDisabled: boolean;
  onSubmit: () => void;
  children: React.ReactNode;
  skipable?: boolean;
  className?: string;
};

export default function OnboardingForm({
  isSubmitDisabled,
  onSubmit,
  skipable,
  children,
  className,
}: Props) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  function handleSkip() {
    //  navigate('/')
    dispatch(backStep());
  }

  function handleSubmit(
    e: React.FormEvent<HTMLFormElement> | React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) {
    e.preventDefault();
    try {
      onSubmit();
      if (isSubmitDisabled) return;
      dispatch(nextStep());
    } catch (error) {
      return;
    }
  }

  return (
    <Form
      onSubmit={handleSubmit}
      className={
        'h-100 d-flex flex-column mb-4 position-relative overflow-y-auto' +
        (className ? ` ${className}` : '')
      }
    >
      <div className="overflow-y-auto">{children}</div>
      <div className="onboarding-btn-container d-flex gap-3 mt-auto justify-content-end bg-white w-100 pt-2">
        {skipable && (
          <Button color="" className="rounded-pill fw-semibold" onClick={handleSkip}>
            Skip for now
          </Button>
        )}
        <Button
          outline={isSubmitDisabled}
          color="primary"
          className={
            'rounded-pill px-4 py-2 fw-semibold' +
            (isSubmitDisabled ? ' text-black border-light-gray' : '')
          }
          type="submit"
          onClick={handleSubmit}
        >
          Continue
        </Button>
      </div>
    </Form>
  );
}
