import { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import caretLeft from '../../assets/images/caret-left.svg';
import caretRight from '../../assets/images/caret-right.svg';
import { Button, InputGroup, InputGroupText } from 'reactstrap';

type Props = {};

export default function DateInput({}: Props) {
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [open, setOpen] = useState(false);

  return (
    <DatePicker
      customInput={<CustomDateInput open={open} />}
      selected={startDate}
      onChange={setStartDate}
      onCalendarOpen={() => setOpen(true)}
      onCalendarClose={() => setOpen(false)}
      className="date-input"
      renderCustomHeader={({
        date,
        decreaseMonth,
        increaseMonth,
        prevMonthButtonDisabled,
        nextMonthButtonDisabled,
      }) => (
        <div className="custom-header d-flex align-items-center justify-content-between mx-3">
          <Button
            className="navigate-month-btn"
            onClick={decreaseMonth}
            disabled={prevMonthButtonDisabled}
          >
            <img src={caretLeft} />
          </Button>
          <h2 className="react-datepicker__current-month">
            {date.toLocaleString('default', { month: 'long', year: 'numeric' })}
          </h2>
          <Button
            className="navigate-month-btn"
            onClick={increaseMonth}
            disabled={nextMonthButtonDisabled}
          >
            <img src={caretRight} />
          </Button>
        </div>
      )}
      calendarClassName="date-picker rounded-12 overflow-hidden text-white"
    />
  );
}

type CustomDateInputProps = {
  value?: string;
  onClick?: () => void;
  open: boolean;
};

const CustomDateInput = ({ value, onClick, open }: CustomDateInputProps) => (
  <InputGroup
    className="date-input filter-input rounded-12 overflow-hidden"
    role="button"
    onClick={onClick}
  >
    <InputGroupText className="bg-white border-0 d-flex w-100">
      <i className="bi bi-calendar-date"></i>
      <span className="ms-3">{value || 'Pick a date'}</span>
      <i className={`bi bi-chevron-${open ? 'up' : 'down'} ms-auto`}></i>
    </InputGroupText>
  </InputGroup>
);
