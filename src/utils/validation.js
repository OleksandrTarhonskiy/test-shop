const validate = ({ name, number }) => {
  let errors = {};

  if (!name) {
    errors.name = 'This field in required';
  } else if (!/^[a-zA-Z]+$/.test(name)) {
    errors.name = 'Only letters allowed';
  }

  if (!number) {
    errors.number = 'This field in required';
  } else if (!/^[0-9]+$/.test(number)) {
    errors.number = 'Only numbers allowed';
  } else if (number.length !== 12) {
    errors.number = 'Should contain 12 characters';
  }

  return errors;
};

export default validate;