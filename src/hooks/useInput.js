import { useState, useCallback } from "react";
import { IoConstructOutline } from "react-icons/io5";

function useInputs(initialForm) {
  const [form, setForm] = useState(initialForm);

  const onChange = useCallback((e) => {
    const { name, value } = e.target;
    console.log('name',name, 'value', value);
    setForm({
      ...form,
      [name]: value
    })
    // setForm((form) => ({ ...form, [name]: value }));
  }, []);

  console.log('form', form);
  const reset = useCallback(() => setForm(initialForm), [initialForm]);
  return [form, onChange, reset];
}

export default useInputs;
