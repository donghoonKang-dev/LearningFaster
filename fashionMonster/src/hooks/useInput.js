import React, { useState, useCallback } from 'react';

export const useInput = (initialState = '', validation) => {
  const [value, setValue] = useState(initialState);
  const [error, setError] = useState('');

  const onChange = useCallback(
    (e) => {
      if (validation) {
        const result = validation.regExp.test(e.target.value);
        if (result) setError('');
        else setError(validation.message);
      }
      setValue(e.target.value);
    },
    [value]
  );

  return [value, onChange, setValue, error];
};

export default useInput;