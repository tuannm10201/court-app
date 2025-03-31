import { useState, useEffect } from 'react';

const DELAY = 500;

export default function useDebounce(value: string) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, DELAY);

    return () => {
      clearTimeout(handler);
    };
  }, [value]);

  return debouncedValue;
}
