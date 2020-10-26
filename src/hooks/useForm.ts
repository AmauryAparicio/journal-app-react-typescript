import { ChangeEvent, useState } from "react";

const useForm = <T>(
  initialState: T
): [T, ({ target }: ChangeEvent<HTMLInputElement>) => void, () => void] => {
  const [values, setValues] = useState(initialState);

  const reset = () => {
    setValues(initialState);
  }

  const handleInputChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    setValues({
      ...values,
      [target.name]: target.value,
    });
  };

  return [values, handleInputChange, reset];
};

export default useForm;
