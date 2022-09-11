// External dependencies
import React from 'react';
import clsx from 'clsx';

// Internal dependencies
import Logo from '@/Icons/Logo';
import useStyles from './Header.styles';
import Container from '../Container';

function Header() {
  const classes = useStyles();

  return (
    <header className={classes.header}>
      <Container className={classes.container}>
        <div className={classes.content}>
          <div className={classes.logoContainer}>
            <Logo size={25} />

            <h2 className={classes.headerTitle}>Health Overview</h2>
          </div>

          <div className={classes.buttonContainer}>
            <button type="button" className={clsx('reset-button', classes.button)}>
              <div />
              <div />
              <div />
            </button>
          </div>
        </div>
      </Container>
    </header>
  );
}

export default Header;
