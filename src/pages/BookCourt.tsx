import { useState } from 'react';
import BookCourtFilter from '../components/BookCourt/BookCourtFilter';
import CourtList from '../components/BookCourt/CourtList';
import { bookCourFilterInitValue, BookCourFilterValue } from '../data/common';
import { FormGroup, Input, Label } from 'reactstrap';

type Props = {};

export default function BookCourt({}: Props) {
  const [value, setValue] = useState<BookCourFilterValue>(bookCourFilterInitValue);

  const [showMap, setShowMap] = useState(false);

  function onChange(newValue: BookCourFilterValue) {
    setValue(newValue);
  }

  return (
    <>
      <BookCourtFilter value={value} onChange={onChange}>
        <FormGroup switch>
          <Input type="switch" role="switch" id="available" className="switch-input mt-0" />
          <Label check className="fw-medium text-white ms-2" for="available">
            Courts unavailable
          </Label>
        </FormGroup>
        <FormGroup switch>
          <Input
            type="switch"
            role="switch"
            className="switch-input mt-0"
            id="show-map"
            checked={showMap}
            onChange={(e) => setShowMap(e.target.checked)}
          />
          <Label check className="fw-medium text-white ms-2" for="show-map">
            Show map
          </Label>
        </FormGroup>
      </BookCourtFilter>

      <CourtList className="mt-3 mt-xl-5" showMap={showMap} />
    </>
  );
}
