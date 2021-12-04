import React from 'react';

import useForm from 'hooks/useForm';
import validate from 'utils/validation';

const Form = (props) => {
  const {
    values,
    errors,
    handleChange,
    handleSubmit,
  } = useForm(submit, validate);

  function submit() {
    console.log('No errors, submit callback called!');
  }

  return (
    <form>
      {console.log(errors)}
      <div className="control">
        <input
          name="name"
          value={values.name || ''}
          onChange={handleChange}
          placeholder="name" 
          className={`form-input ${errors.name ? 'error' : ''}`}
        />
        {errors.name && <span className="control-error">{errors.name}</span>}
      </div>
      <div className="control">
        <input 
          name="number"
          value={values.number || ''}
          onChange={handleChange}
          placeholder="number" 
          className={`form-input ${errors.number ? 'error' : ''}`} 
        />
        {errors.number && <span className="control-error">{errors.number}</span>}
      </div>
      <div className="control mt-3">
        <button 
          type="submit"
          onClick={handleSubmit}
          className="btn btn-success w-100"
        >
          Order
        </button>
      </div>
    </form>
  );
}

export default Form;