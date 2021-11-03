import { useEffect } from 'react';

/**
 * @description React to keypress
 * @param {func} onKeyPress Executed on keydown
 * @param {string} keyname
 */
export default function useKeyPress(onKeyPress: Function, keyname: string) {
  useEffect(() => {
    function handleKeyPress(event: KeyboardEvent) {
      if (event.key?.toLowerCase() === keyname?.toLowerCase()) {
        onKeyPress();
      }
    }
    document.addEventListener('keydown', handleKeyPress);
    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, [onKeyPress, keyname]);
}
