/* eslint-disable jsx-a11y/label-has-associated-control */
// External dependencies
import React from 'react';

// Internal dependencies
import useStyles from './Label.styles';

// Types & Interfaces
interface ILabelProps {
  htmlFor?: string;
}

function Label({ children, htmlFor }: React.PropsWithChildren<ILabelProps>) {
  const classes = useStyles();

  return (
    <label htmlFor={htmlFor} className={classes.label}>
      {children}
    </label>
  );
}

export default Label;
