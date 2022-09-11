// External dependencies
import React from 'react';
import clsx from 'clsx';

// Internal dependencies
import useStyles from './Container.styles';

// Types & Interfaces
interface IContainerProps {
  className?: string;
}

function Container({ children, className }: React.PropsWithChildren<IContainerProps>) {
  const classes = useStyles();

  return <div className={clsx(classes.container, className)}>{children}</div>;
}

export default Container;
