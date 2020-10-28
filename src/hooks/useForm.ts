import { ChangeEvent, useState } from "react";

const useForm = <T>(
  initialState: T
): [T, ({ target }: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void, (newFormState: T) => void] => {
  const [values, setValues] = useState(initialState);

  const reset = (newFormState: T = initialState) => {
    setValues(newFormState);
  }

  const handleInputChange = ({ target }: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setValues({
      ...values,
      [target.name]: target.value,
    });
  };

  return [values, handleInputChange, reset];
};

export default useForm;
