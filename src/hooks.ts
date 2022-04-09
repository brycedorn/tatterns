import { useCallback, useEffect, useRef, useState } from 'preact/hooks';
import { getQueryStringValue, setQueryStringValue } from './utils';

export function useIsRendered() {
  const isRendered = useRef(false);

  useEffect(() => {
    isRendered.current = true;
  }, []);

  return isRendered.current;
}

export function useQueryString(key: string, initialValue?: string) {
  const [value, setValue] = useState(getQueryStringValue(key) || initialValue);

  const onSetValue = useCallback(
    (newValue: string) => {
      setValue(newValue);
      setQueryStringValue(key, newValue);
    },
    [key]
  );

  return [value, onSetValue] as const;
}

export function usePageVisibility() {
  const [isVisible, setIsVisible] = useState(!document.hidden);
  const onVisibilityChange = () => setIsVisible(!document.hidden);

  useEffect(() => {
    document.addEventListener('visibilitychange', onVisibilityChange, false);

    return () => {
      document.removeEventListener('visibilitychange', onVisibilityChange);
    };
  });

  return isVisible;
}
