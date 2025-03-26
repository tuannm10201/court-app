import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { Button } from 'reactstrap';

type Props = {};

export default function OnboardingSuccess({}: Props) {
  const navigate = useNavigate();
  const [countdown, setCountdown] = useState(59);

  function backToHome() {
    navigate('/');
  }

  useEffect(() => {
    if (countdown === 0) {
      backToHome();
    }

    const timer = setInterval(() => {
      setCountdown((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [countdown]);

  return (
    <>
      <div className="success-container w-100 d-flex align-items-center justify-content-center position-relative">
        <div className="success-circle">
          <div className="inner-circle">
            <svg
              className="check-icon"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="50"
              height="50"
            >
              <path d="M9 18l-4-4 1.41-1.41L9 15.17l8.59-8.59L19 8l-10 10z" fill="green" />
            </svg>
          </div>
        </div>
        <div className="wave"></div>
        <div className="wave delay-1"></div>
        <div className="wave delay-2"></div>
        <div className="wave delay-3"></div>
        <div className="wave delay-4"></div>
        <div className="wave delay-5"></div>
      </div>

      <h2 className="text-center">Account Created Successfully</h2>
      <p className="text-center color-dark-gray">
        You’re all set! Start booking courts and enjoy your game
      </p>
      <p className="text-center color-dark-gray">
        Redirecting to home in
        <span className="fw-semibold color-green ms-2">00:{`0${countdown}`.slice(-2)}</span>
      </p>

      <Button
        color="primary"
        className="rounded-pill px-4 py-2 fw-semibold mt-auto mb-4"
        onClick={backToHome}
      >
        Go to Homepage
      </Button>
    </>
  );
}
