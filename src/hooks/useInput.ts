import React from 'react';

export default function useInput<T>(initialValue: T) {
  const [value, setValue] = React.useState<T>(initialValue);

  const handleChange = React.useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setValue(e.target.value as unknown as T);
    },
    []
  );

  return [value, handleChange] as const;
}
