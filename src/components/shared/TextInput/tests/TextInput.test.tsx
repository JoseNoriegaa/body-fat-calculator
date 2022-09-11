// External dependencies
import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';

// Internal dependencies
import TextInput from '../TextInput';

// Types & Interfaces
type TTextInputProps = React.ComponentProps<typeof TextInput>;

// Mocks
jest.mock('../ErrorText.tsx', () => ({
  __esModule: true,
  default: () => <span>error</span>,
}));

jest.mock('../Label.tsx', () => ({
  __esModule: true,
  default: () => <span>label</span>,
}));

const onChangeMock = jest.fn();

// Constants
const makeProps = (props?: Partial<TTextInputProps>) => {
  const output = {
    name: 'form_field',
    onChange: onChangeMock,
    placeholder: 'placeholder',
    error: undefined,
    label: 'Form Field',
    value: '',
    ...props,
  } as TTextInputProps;

  return output;
};

describe('<TextInput />', () => {
  it('should match snapshot', () => {
    const { asFragment } = render(<TextInput {...makeProps()} />);

    expect(asFragment()).toMatchSnapshot();
  });

  it('should render the Label component if the label property was provided', () => {
    render(<TextInput {...makeProps()} />);

    expect(screen.getByText('label')).toBeInTheDocument();
  });

  it('should render the ErrorText component if the error property was provided', () => {
    render(<TextInput {...makeProps({ error: 'something went wrong' })} />);

    expect(screen.getByText('error')).toBeInTheDocument();
  });

  it('should handle onChange', () => {
    render(<TextInput {...makeProps({ value: 'input value' })} />);

    const input = screen.getByDisplayValue('input value');
    expect(input).toHaveProperty('id', 'input_form_field');

    fireEvent.change(input, { target: { value: 'new text' } });

    expect(onChangeMock).toHaveBeenCalled();
  });
});
