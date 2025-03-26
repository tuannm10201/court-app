import { MAX_STEP } from '../../data/common';
import { useSelector } from '../../hooks/useStore';

type Props = {
  className?: string;
};

export default function OnboardingStep({ className }: Props) {
  const step = useSelector((state) => state.onboarding.step);

  return (
    <>
      <div className={'d-flex gap-1' + (className ? ` ${className}` : '')}>
        {Array.from({ length: MAX_STEP }).map((_, index) => (
          <div
            key={index}
            className={'progress-bar rounded-pill' + (step === index + 1 ? ' active' : '')}
          ></div>
        ))}
      </div>

      <div className="color-dark-gray mt-3">
        {`0${step}`.slice(-2)} of {`0${MAX_STEP}`.slice(-2)}
      </div>
    </>
  );
}
