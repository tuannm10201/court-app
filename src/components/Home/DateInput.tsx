import { InputGroup, InputGroupText } from 'reactstrap';

type Props = {};

export default function DateInput({}: Props) {
  return (
    <InputGroup
      className="date-input filter-input rounded-12 overflow-hidden bg-white"
      role="button"
    >
      <InputGroupText className="bg-white border-0 d-flex w-100">
        <i className="bi bi-calendar-date"></i>
        <span className="ms-3"> Today </span>
        <i className="bi bi-chevron-down ms-auto"></i>
      </InputGroupText>
    </InputGroup>
  );
}
