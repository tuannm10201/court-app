import DateInput from '../Common/DateInput';
import LocationInput from './LocationInput';

type Props = {};

export default function HomeFilter({}: Props) {
  return (
    <div className="home-filter d-flex align-items-center p-3 gap-3 rounded-4 filter bg-primary position-relative">
      <DateInput />
      <LocationInput />
    </div>
  );
}
