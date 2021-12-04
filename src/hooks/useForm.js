import { useState, useEffect } from 'react';

const useForm = (callback, validate) => {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      callback();
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [errors]);

  const handleSubmit = (event) => {
    if (event) event.preventDefault();
    setErrors(validate(values));
    setIsSubmitting(true);
  };

  const handleChange = (event) => {
    setErrors((errors) => ({ ...errors, [event.target.name]: '' }));
    event.persist();
    setValues((values) => ({ ...values, [event.target.name]: event.target.value }));
  };

  const onBlur = (e) => {
    const errs = validate(values);
    setErrors((errors) => ({ ...errors, [e.target.name]: errs[e.target.name] }));
  }

  return {
    handleChange,
    handleSubmit,
    values,
    errors,
    onBlur,
  }
};

export default useForm;