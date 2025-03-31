import { useState } from 'react';
import {
  Dropdown,
  DropdownMenu,
  DropdownItem,
  InputGroup,
  InputGroupText,
  Input,
  DropdownToggle,
} from 'reactstrap';

interface Options<T> {
  label: string;
  value: T;
}

type Props<T> = {
  options: Options<T>[];
  value: T[];
  onChange?: (val: T[]) => void;
  placeholder?: string;
  icon: React.ReactNode;
};

export default function MultipleSelect<T extends string | number>({
  options,
  value,
  onChange,
  placeholder,
  icon,
}: Props<T>) {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  function toggle() {
    setDropdownOpen(!dropdownOpen);
  }

  function handleSelect(selectVal: T): void {
    if (!onChange) return;

    if (value.includes(selectVal)) {
      onChange(value.filter((v) => v !== selectVal));
    } else {
      onChange(value.concat(selectVal));
    }
  }

  const valueDisplay =
    value.length > 0
      ? options
          .filter((option) => value.includes(option.value))
          .map((option) => option.label)
          .join(' - ')
      : placeholder;

  return (
    <div className="multiple-select">
      <InputGroup
        className="filter-input rounded-12 overflow-hidden bg-white"
        role="button"
        onClick={toggle}
      >
        <InputGroupText className="bg-white border-0 d-flex w-100 align-items-center">
          {icon}
          <span className="ms-2 text-truncate">{valueDisplay}</span>
          <i
            className={`chevron-icon text-white bi bi-chevron-${
              dropdownOpen ? 'up' : 'down'
            } ms-auto`}
          />
        </InputGroupText>
      </InputGroup>

      <Dropdown isOpen={dropdownOpen} toggle={toggle}>
        <DropdownToggle hidden />
        <DropdownMenu
          className={
            'flex-column gap-1 rounded-12 mt-2 p-2 w-100' + (dropdownOpen ? ' d-flex' : '')
          }
        >
          {options.map((option) => (
            <DropdownItem
              toggle={false}
              key={option.value}
              className={`d-flex align-items-center text-white p-2 fw-medium rounded-2 ${
                value.includes(option.value) ? 'selected' : ''
              }`}
              onClick={() => handleSelect(option.value)}
            >
              <Input
                type="checkbox"
                checked={value.includes(option.value)}
                readOnly
                className={'me-2 mt-0' + (value.includes(option.value) ? ' bg-white' : '')}
              />
              {option.label}
            </DropdownItem>
          ))}
        </DropdownMenu>
      </Dropdown>
    </div>
  );
}
