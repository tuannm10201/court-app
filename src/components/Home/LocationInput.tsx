import { useState } from 'react';
import {
  Button,
  InputGroup,
  InputGroupText,
  Input,
  Dropdown,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';

type Props = {};

const suggestedLocations = ['Los Angeles, California', 'Las Vegas, Nevada', 'Louisville, Kentucky'];

export default function LocationInput({}: Props) {
  const [inputValue, setInputValue] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setInputValue(e.target.value);
    setIsOpen(e.target.value.length > 0);
  }

  return (
    <div className="location-input">
      <InputGroup className="filter-input rounded-12 overflow-hidden bg-white">
        <InputGroupText className="bg-white border-0">
          <i className="bi bi-geo-alt" />
        </InputGroupText>
        <Input
          className="border-0 px-0 py-2"
          value={inputValue}
          onChange={handleChange}
          onFocus={() => setIsOpen(true)}
          onBlur={() =>
            setTimeout(() => {
              setIsOpen(false);
            }, 100)
          }
        />
        <Button
          outline
          className="submit-change-btn bg-gray d-flex rounded-pill fw-semibold fs-sm my-auto me-2 ms-1 text-black"
        >
          Change
        </Button>
      </InputGroup>

      <Dropdown isOpen={isOpen} toggle={() => setIsOpen(!isOpen)}>
        <DropdownMenu className="location-dropdown border-light-gray rounded-12 mt-2">
          <DropdownItem className="fw-semibold d-flex justify-content-between align-items-center">
            <span> Use your current location</span>
            <i className="bi bi-crosshair location-icon"></i>
          </DropdownItem>
          {suggestedLocations.length > 0 && (
            <>
              <DropdownItem disabled className="fw-semibold text-black mt-1">
                Location
              </DropdownItem>
              {suggestedLocations.map((item, index) => (
                <DropdownItem key={index} className="py-2" onClick={() => setInputValue(item)}>
                  <i className="bi bi-geo-alt me-2"></i>
                  {item}
                </DropdownItem>
              ))}
            </>
          )}
        </DropdownMenu>
      </Dropdown>
    </div>
  );
}
