import { useState } from 'react';
import { Button } from 'reactstrap';
import OnboardingForm from './OnboardingForm';
import { useDispatch, useSelector } from '../../hooks/useStore';
import { updateSports } from '../../store/onboardingSlice';

type Props = {};

const SPORTS = [
  { name: 'Tennis', value: 'tennis' },
  { name: 'Pickleball', value: 'pickleball' },
  { name: 'Basketball', value: 'basketball' },
  { name: 'Badminton', value: 'badminton' },
  { name: 'Pickleball', value: 'pickleball_2' },
  { name: 'Table Tennis', value: 'table_tennis' },
  { name: 'Volleyball', value: 'volleyball' },
  { name: 'Football', value: 'football' },
];

export default function SportsSelect({}: Props) {
  const sportsObj = useSelector((state) => state.onboarding.sports);
  const dispatch = useDispatch();

  const [sports, setSports] = useState<string[]>(Object.keys(sportsObj));

  function select(value: string) {
    setSports((prev) =>
      prev.includes(value) ? prev.filter((s) => s !== value) : prev.concat(value)
    );
  }

  const isSelected = (val: string): boolean => sports.includes(val);

  function onSubmit() {
    const newSportsValue = Object.fromEntries(
      sports.map((sport) => [sport, sport in sportsObj ? sportsObj[sport] : 1])
    );
    dispatch(updateSports(newSportsValue));
  }

  return (
    <OnboardingForm isSubmitDisabled={sports.length === 0} skipable onSubmit={onSubmit}>
      <div className="d-flex flex-wrap gap-3">
        {SPORTS.map((sport, index) => (
          <Button
            key={index}
            color={isSelected(sport.value) ? 'success' : 'secondary'}
            outline={!isSelected(sport.value)}
            onClick={() => select(sport.value)}
            className={
              'sport-select-btn rounded-pill text-black fw-semibold px-3 ' +
              (isSelected(sport.value) ? 'text-white' : 'border-light-gray')
            }
          >
            {sport.name}
          </Button>
        ))}
      </div>
    </OnboardingForm>
  );
}
