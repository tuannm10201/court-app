import DateInput from './DateInput';
import LocationInput from './LocationInput';

type Props = {};

export default function Filter({}: Props) {
  return (
    <div className="d-flex align-items-center p-3 gap-3 rounded-4 filter bg-primary">
      <DateInput />
      <LocationInput />
    </div>
  );
}
