import React, { useCallback, useEffect, useState } from "react";

function dump(value: any) {
  const plainText = JSON.stringify(value);
  return btoa(plainText);
}

function load(str: string | null) {
  if (!str) {
    return null;
  }
  const plainText = atob(str);
  return JSON.parse(plainText);
}

export function useLocalStorage<T>(
  key: string,
  fallback: T | (() => T)
): [T, React.Dispatch<React.SetStateAction<T>>] {
  const getItemOrFallback = useCallback(() => {
    const storedBlob = window.localStorage.getItem(key);
    let item;
    if (storedBlob) {
      item = load(storedBlob);
    } else {
      if (fallback instanceof Function) {
        item = fallback();
      } else {
        item = fallback;
      }
      window.localStorage.setItem(key, dump(item));
    }
    return item;
  }, [key]);

  useEffect(() => {
    const item = getItemOrFallback();
    setStoredValue(item);
  }, [getItemOrFallback]);

  const [storedValue, setStoredValue] = useState<T>(() => getItemOrFallback());

  const setValue = (value: T | ((val: T) => T)) => {
    try {
      const valueToStore =
        value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      window.localStorage.setItem(key, dump(valueToStore));
    } catch (error) {
      /*empty*/
    }
  };
  return [storedValue, setValue];
}
