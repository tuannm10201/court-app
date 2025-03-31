import { PropsWithChildren, useState } from 'react';
import {
  Button,
  Col,
  Input,
  InputGroup,
  InputGroupText,
  Modal,
  ModalBody,
  ModalHeader,
  Row,
} from 'reactstrap';
import DateInput from '../Common/DateInput';
import MultipleSelect from '../Common/MultipleSelect';
import surfaceIcon from '../../assets/images/surface-icon.svg';
import courtTypeIcon from '../../assets/images/court-type-icon.svg';
import LocationAutocomplete from '../Common/LocationAutocomplete';
import { NavLink } from 'react-router';
import { bookCourFilterInitValue, BookCourFilterValue } from '../../data/common';

const courstTypeOptions = [
  { label: 'Type 1', value: '1' },
  { label: 'Type 2', value: '2' },
];
const timeOptions = [
  { label: '1 hour', value: 1 },
  { label: '1 hour 30 minutes', value: 1.5 },
  { label: '2 hours', value: 2 },
];
const surfaceOptions = [
  { label: 'Padel', value: 'padel' },
  { label: 'Tennis', value: 'tennis' },
];

type Props = PropsWithChildren & {
  value: BookCourFilterValue;
  onChange: (val: BookCourFilterValue) => void;
};

export default function BookCourtFilter({ value, onChange, children }: Props) {
  function applyChange() {
    onChange(localValue);
  }
  function reset() {
    onChange(bookCourFilterInitValue);
    setLocalValue(bookCourFilterInitValue);
  }

  const [localValue, setLocalValue] = useState(value);

  function onLocalChange(val: string[] | number[], field: keyof BookCourFilterValue) {
    setLocalValue({
      ...localValue,
      [field]: val,
    });
  }

  const [modal, setModal] = useState(false);
  function toggleModal() {
    if (!modal) {
      setLocalValue(value);
    }
    setModal(!modal);
  }

  const filterComponent = (
    <div className="boook-court-filter rounded-4 bg-primary p-3">
      <Row className="gap-3 gap-xl-0">
        <Col xl={3}>
          <MultipleSelect
            options={courstTypeOptions}
            value={localValue.courstType}
            onChange={(val) => onLocalChange(val, 'courstType')}
            icon={<img alt="court-type" src={courtTypeIcon} />}
            placeholder="Court type"
          />
        </Col>
        <Col xl={3}>
          <LocationAutocomplete />
        </Col>
        <Col xl={3}>
          <DateInput />
        </Col>
        <Col xl={3}>
          <MultipleSelect
            options={timeOptions}
            value={localValue.times}
            onChange={(val) => onLocalChange(val, 'times')}
            icon={<i className="bi bi-clock" />}
            placeholder="Pick a time"
          />
        </Col>
      </Row>

      <Row className="mt-xl-4 mt-3">
        <Col xl={3}>
          <MultipleSelect
            options={surfaceOptions}
            value={localValue.surfaces}
            onChange={(val) => onLocalChange(val, 'surfaces')}
            icon={<img alt="surface" src={surfaceIcon} />}
            placeholder="Surface"
          />
        </Col>
        <Col xl={3} className="d-none d-xl-flex">
          <Button
            className="book-court-filter-btn border-0 rounded-pill fw-semibold bg-white text-black"
            onClick={reset}
          >
            Reset
          </Button>
          <Button
            color="success"
            className="book-court-filter-btn border-0 rounded-pill fw-semibold text-white ms-3"
            onClick={applyChange}
          >
            Search
          </Button>
        </Col>
      </Row>
      <Row className="mt-4">
        <Col className="d-flex gap-xl-4 gap-3 flex-column flex-xl-row">{children}</Col>
        <div className="text-white mt-3 d-none d-xl-flex gap-1">
          <span className="fw-semibold">142</span> clubs/courts found,
          <span className="fw-semibold">139</span> with availability
        </div>
      </Row>
    </div>
  );

  function handleReset(): void {
    reset();
    toggleModal();
  }

  function handleSearch(): void {
    applyChange();
    toggleModal();
  }

  return (
    <>
      <div className="d-flex d-xl-none align-items-center gap-3 search-container">
        <NavLink to="/">
          <i className="bi bi-chevron-left fs-5" />
        </NavLink>

        <InputGroup
          className="book-court-search-bar rounded-12 overflow-hidden border ps-1"
          onClick={toggleModal}
        >
          <InputGroupText className="bg-white border-0 pe-1">
            <i className="bi bi-search" />
          </InputGroupText>
          <Input type="text" placeholder="Search Now" className="border-0" />
        </InputGroup>

        <i className="bi bi-sliders fs-5" role="button" onClick={toggleModal} />
      </div>

      <div className="d-none d-xl-block">{filterComponent}</div>

      <Modal isOpen={modal} toggle={toggleModal} centered fullscreen>
        <ModalHeader toggle={toggleModal} className="close-left border-0 pt-4 my-2" />
        <ModalBody>
          {filterComponent}
          <div className="book-court-sm-btn-container d-flex d-xl-none justify-content-between position-fixed w-100 bottom-0 p-3">
            <Button
              className="w-100 book-court-filter-btn border-0 rounded-pill fw-semibold bg-white text-black"
              onClick={handleReset}
            >
              Reset
            </Button>
            <Button
              color="primary"
              className="w-100 book-court-filter-btn border-0 rounded-pill fw-semibold text-white ms-3"
              onClick={handleSearch}
            >
              Search
            </Button>
          </div>
        </ModalBody>
      </Modal>
    </>
  );
}
