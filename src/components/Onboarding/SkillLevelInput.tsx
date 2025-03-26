import { useState } from 'react';
import OnboardingForm from './OnboardingForm';
import { FormGroup, Input, Label } from 'reactstrap';
import tennisBallIcon from '../../assets/images/tennis-ball-gray-icon.svg';
import { useDispatch, useSelector } from '../../hooks/useStore';
import { useNavigate } from 'react-router';
import { createSuccess } from '../../store/onboardingSlice';

type Props = {};

const MAX = 7;
const MIN = 0;

const SPORTS = [
  { name: 'Tennis', id: 'tennis', icon: tennisBallIcon },
  { name: 'Pickleball', id: 'pickleball', icon: tennisBallIcon },
  { name: 'Basketball', id: 'basketball', icon: tennisBallIcon },
  { name: 'Badminton', id: 'badminton', icon: tennisBallIcon },
  { name: 'Pickleball', id: 'pickleball_2', icon: tennisBallIcon },
  { name: 'Table Tennis', id: 'table_tennis', icon: tennisBallIcon },
  { name: 'Volleyball', id: 'volleyball', icon: tennisBallIcon },
  { name: 'Football', id: 'football', icon: tennisBallIcon },
];

export default function SkillLevelInput({}: Props) {
  const sportsObj = useSelector((state) => state.onboarding.sports);
  const [levelObj, setLevelObj] = useState<typeof sportsObj>(sportsObj);

  function handleInput(e: React.FormEvent<HTMLInputElement>) {
    const { id, value } = e.target as HTMLInputElement;
    setLevelObj({ ...levelObj, [id]: +value });
  }

  const outputLeft = (skill: string) => {
    const newVal = ((levelObj[skill] - MIN) * 100) / (MAX - MIN);
    return `calc(${newVal}% + (${8 - newVal * 0.15}px))`;
  };

  const dispatch = useDispatch();

  function onSubmit(): void {
    console.log(sportsObj);

    dispatch(createSuccess());
  }

  return (
    <OnboardingForm isSubmitDisabled={false} skipable onSubmit={onSubmit} className="gap-2">
      {SPORTS.filter((s) => s.id in levelObj).map((skill) => (
        <FormGroup className="border-light-gray rounded-3 p-3" key={skill.id}>
          <Label for={skill.id} className="d-flex align-items-center gap-2 mb-4 pb-2">
            <img src={skill.icon} alt={skill.icon} />
            {skill.name}
          </Label>
          <div className="skill-level-range-input position-relative fw-semibold">
            <Input
              id={skill.id}
              name={skill.id}
              type="range"
              min={MIN}
              max={MAX}
              value={levelObj[skill.id]}
              style={
                { '--progress': `${(levelObj[skill.id] * 100) / MAX}%` } as React.CSSProperties
              }
              onInput={handleInput}
            />
            <div className="d-flex justify-content-between">
              <span>{MIN}</span>
              <span>{MAX}</span>
            </div>
            <output
              style={{ left: outputLeft(skill.id) }}
              className="py-2 px-3 rounded-pill text-white position-absolute d-flex justify-content-center align-items-center"
            >
              {levelObj[skill.id]}
            </output>
          </div>
        </FormGroup>
      ))}
    </OnboardingForm>
  );
}
