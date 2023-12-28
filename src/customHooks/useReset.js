import {useEffect, useState} from 'react';

const useReset = () => {
  const [resetValue, setResetValue] = useState(0);

  useEffect(() => {
    setResetValue(0);
  }, [resetValue]);

  return {
    resetValue,
    setResetValue,
  };
};

export default useReset;
