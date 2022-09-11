// External dependencies
import React from 'react';

// Internal dependencies
import useStyles from './ErrorText.styles';

function ErrorText({ children }: React.PropsWithChildren<unknown>) {
  const classes = useStyles();
  return <p className={classes.error}>{children}</p>;
}

export default ErrorText;
