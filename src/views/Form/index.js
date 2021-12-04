import React from 'react';

import useForm from 'hooks/useForm';
import validate from 'utils/validation';
import icon from 'assets/images/error.svg';

const Form = (props) => {
  const {
    values,
    errors,
    handleChange,
    handleSubmit,
    onBlur,
  } = useForm(submit, validate);

  function submit() {
    console.log(values);
  }

  return (
    <form>
      <div className="control">
        <div className="input-with-icon">
          <input
            name="name"
            value={values.name || ''}
            onChange={handleChange}
            placeholder="name" 
            className={`form-input ${errors.name ? 'error' : ''}`}
            onBlur={(e) => onBlur(e)}
          />
          {errors.name && <img className="input-with-icon_icon" src={icon} alt="" />}
        </div>
        {errors.name && <span className="control-error">{errors.name}</span>}
      </div>
      <div className="control">
        <div className="input-with-icon">
          <input 
            name="number"
            value={values.number || ''}
            onChange={handleChange}
            placeholder="number" 
            className={`form-input ${errors.number ? 'error' : ''}`}
            onBlur={(e) => onBlur(e)}
          />
          {errors.number && <img className="input-with-icon_icon" src={icon} alt="" />}
        </div>
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