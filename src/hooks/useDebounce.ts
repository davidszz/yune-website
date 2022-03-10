import { MutableRefObject, useRef } from 'react';

export function useDebounce() {
  const timeoutRef = useRef() as MutableRefObject<NodeJS.Timeout>;

  function debounceFunction(callback: (...args: any) => void, delay: number) {
    window.clearTimeout(timeoutRef.current);
    timeoutRef.current = window.setTimeout(() => {
      callback();
    }, delay) as unknown as NodeJS.Timeout;
  }

  return [debounceFunction];
}