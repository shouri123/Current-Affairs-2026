"use client";

import { useState, useEffect, useCallback } from "react";

export function useLocalStorage<T>(key: string, initialValue: T) {
  const [value, setValue] = useState<T>(initialValue);
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    try {
      const item = localStorage.getItem(key);
      if (item !== null) {
        setValue(JSON.parse(item));
      }
    } catch (e) {
      console.warn(`Error reading localStorage key "${key}":`, e);
    }
    setIsInitialized(true);
  }, [key]);

  const setStoredValue = useCallback(
    (newValue: T | ((prev: T) => T)) => {
      setValue((prev) => {
        const resolved = typeof newValue === "function" ? (newValue as (p: T) => T)(prev) : newValue;
        if (typeof window !== "undefined") {
          try {
            localStorage.setItem(key, JSON.stringify(resolved));
          } catch (e) {
            console.warn(`Error writing localStorage key "${key}":`, e);
          }
        }
        return resolved;
      });
    },
    [key]
  );

  return [value, setStoredValue, isInitialized] as const;
}

