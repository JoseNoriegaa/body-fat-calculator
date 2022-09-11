// External dependencies
import React from 'react';
import clsx from 'clsx';

// Internal dependencies
import Label from './Label';
import useStyles from './TextInput.styles';
import ErrorText from './ErrorText';

// Types & Interfaces
interface ITextInputProps {
  name: string;
  placeholder: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string | number;
  label?: string;
  error?: string;
}

function TextInput({ onChange, name, value, placeholder, label, error }: ITextInputProps) {
  const classes = useStyles();

  const inputId = `input_${name}`;

  return (
    <div className={classes.container}>
      {label && <Label htmlFor={inputId}>{label}</Label>}

      <input
        id={inputId}
        type="text"
        name={name}
        className={clsx(classes.input, error && classes.inputError)}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />

      {error && (
        <div className={classes.errorContainer}>
          <ErrorText>{error}</ErrorText>
        </div>
      )}
    </div>
  );
}

export default TextInput;
