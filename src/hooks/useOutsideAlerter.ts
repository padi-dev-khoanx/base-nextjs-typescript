import { useEffect, useState } from 'react';

export function useOutsideAlerter(ref: any, status: any, handleOutside: () => any) {
  const [state, setState] = useState(status || false);
  useEffect(() => {
    function handleClickOutside(event: { target: any }) {
      if (ref.current && !ref.current.contains(event.target)) {
        setState((p: any) => !p);
        handleOutside && handleOutside();
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref, setState]);
  return [state, setState];
}
