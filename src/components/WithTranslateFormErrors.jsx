import React from 'react';
import { useTranslateFormErrors } from '../hooks/useTranslationFormErrors';
import PropTypes from 'prop-types';

function WithTranslateFormErrors ({ errors, touched, setFieldTouched, children }) {
  useTranslateFormErrors(errors, touched, setFieldTouched);
  return <>{children}</>;
}
  
WithTranslateFormErrors.propTypes = {
  form: PropTypes.object,
  touched: PropTypes.object,
  errors: PropTypes.object,
  setFieldTouched: PropTypes.func,
  children: PropTypes.object,
};
  
export default WithTranslateFormErrors;