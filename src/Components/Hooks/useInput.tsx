import { useState } from "react";

const useInput = (value: string) => {
  const [inputVal, setInputVal] = useState<string>(value);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputVal(e.target.value);
  };

  return { inputVal, handleInputChange };
};

export default useInput;
