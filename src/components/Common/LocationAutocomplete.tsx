import { useState, useEffect } from 'react';
import {
  InputGroup,
  InputGroupText,
  Input,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  Spinner,
} from 'reactstrap';
import { useGetLocationSuggestionsQuery, useLazyGetLocationFromCoordinatesQuery } from '../../api';
import useDebounce from '../../hooks/useDebounce';
import { Location } from '../../data/types/otherTypes';

type Props = {};

export default function LocationAutocomplete({}: Props) {
  const [query, setQuery] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [hasUserTyped, setHasUserTyped] = useState(false);

  const debouncedQuery = useDebounce(query);

  const { data: suggestedLocations = [], isFetching } = useGetLocationSuggestionsQuery(
    debouncedQuery,
    { skip: !debouncedQuery }
  );

  const [fetchLocation, { data: currentLocation, isFetching: isFetchingLocation }] =
    useLazyGetLocationFromCoordinatesQuery();

  function handleSelect(loc: Location) {
    setQuery(loc.display_name);
    setIsOpen(false);
    setHasUserTyped(true);
  }

  function handleUseCurrentLocation() {
    if (!navigator.geolocation) {
      alert('Geolocation is not supported by your browser.');
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        fetchLocation({
          lat: position.coords.latitude,
          lon: position.coords.longitude,
        });
        setHasUserTyped(false);
      },
      () => alert('Unable to retrieve location.')
    );
  }

  useEffect(() => {
    if (currentLocation?.display_name && !hasUserTyped) {
      setQuery(currentLocation.display_name);
    }
  }, [currentLocation, hasUserTyped]);

  return (
    <div className="location-auto-complete">
      <InputGroup className="filter-input rounded-12 overflow-hidden bg-white">
        <InputGroupText className="bg-white border-0">
          {isFetching || isFetchingLocation ? (
            <Spinner size="sm" />
          ) : (
            <i className="bi bi-geo-alt" />
          )}
        </InputGroupText>
        <Input
          className="border-0 p-2 ps-0 text-truncate"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setHasUserTyped(true);
          }}
          onFocus={() => setIsOpen(true)}
          onBlur={() =>
            setTimeout(() => {
              setIsOpen(false);
            }, 100)
          }
        />
      </InputGroup>

      <Dropdown isOpen={isOpen} toggle={() => setIsOpen(!isOpen)}>
        <DropdownMenu className="rounded-12 mt-2 p-2">
          <DropdownItem
            className="fw-semibold rounded-2 text-white d-flex justify-content-between align-items-center px-2"
            onClick={handleUseCurrentLocation}
            disabled={isFetchingLocation}
          >
            <span className="me-3"> Use your current location</span>
            {isFetchingLocation ? (
              <Spinner size="sm" />
            ) : (
              <i className="bi bi-crosshair location-icon"></i>
            )}
          </DropdownItem>

          {suggestedLocations.length > 0 ? (
            <>
              <DropdownItem disabled className="fw-semibold p-2 rounded-2 text-white mt-1">
                Location
              </DropdownItem>
              {suggestedLocations.map((loc, index) => (
                <DropdownItem
                  key={index}
                  className="p-2 rounded-2 text-white"
                  onClick={() => handleSelect(loc)}
                >
                  <i className="bi bi-geo-alt me-2"></i>
                  {loc.display_name}
                </DropdownItem>
              ))}
            </>
          ) : (
            <DropdownItem disabled className="text-white text-center">
              No locations found
            </DropdownItem>
          )}
        </DropdownMenu>
      </Dropdown>
    </div>
  );
}
