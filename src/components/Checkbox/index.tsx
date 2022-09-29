import React from 'react';
import {Checkbox as CheckboxOriginal, FormControlLabel, CheckboxProps as CheckboxPropsOriginal} from '@mui/material';
import { } from '@mui/material';

interface CheckboxProps {
  label: string;
  onClick?: () => void;
}

const Checkbox = (props: CheckboxProps & CheckboxPropsOriginal) => {
  const {label,...rest} = props;

  return (
    label ?  <FormControlLabel control={<CheckboxOriginal {...rest} />} label={label} /> : <CheckboxOriginal {...rest} />
  );
};

export default Checkbox
