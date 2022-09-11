// External dependencies
import { fireEvent, render, screen, waitFor } from '@testing-library/react';

// Internal dependencies
import Form from '../Form';
import useForm from '../hooks/useForm';

// Mocks
jest.mock('../hooks/useForm.ts');
const onSubmit = jest.fn();

const useFormMock = useForm as jest.Mock;
const onClearValuesMock = jest.fn();
const submitFormMock = jest.fn();

describe('<Form />', () => {
  beforeEach(() => {
    useFormMock.mockReturnValue({
      formik: {
        values: {},
        errors: {},
        submitForm: submitFormMock,
      },
      clearValues: onClearValuesMock,
    });

    useFormMock.mockClear();
    onClearValuesMock.mockClear();
    submitFormMock.mockClear();
  });

  it('should match snapshot - male', () => {
    const { asFragment } = render(<Form onSubmit={onSubmit} />);

    expect(asFragment()).toMatchSnapshot();
  });

  it('should match snapshot - female', () => {
    useFormMock.mockReturnValue({
      formik: {
        values: { isMale: 'false' },
        errors: {},
        submitForm: submitFormMock,
      },
      clearValues: onClearValuesMock,
    });

    const { asFragment } = render(<Form onSubmit={onSubmit} />);

    expect(asFragment()).toMatchSnapshot();
  });

  it('should match snapshot - male - error state', () => {
    useFormMock.mockReturnValue({
      formik: {
        values: { isMale: 'false' },
        errors: {
          height: 'error',
          weight: 'error',
          waist: 'error',
          neck: 'error',
        },
        submitForm: submitFormMock,
      },
      clearValues: onClearValuesMock,
    });

    const { asFragment } = render(<Form onSubmit={onSubmit} />);

    expect(asFragment()).toMatchSnapshot();
  });

  it('should match snapshot - female - error state', () => {
    useFormMock.mockReturnValue({
      formik: {
        values: { isMale: 'false' },
        errors: {
          hip: 'error',
          height: 'error',
          weight: 'error',
          waist: 'error',
          neck: 'error',
        },
        submitForm: submitFormMock,
      },
      clearValues: onClearValuesMock,
    });

    const { asFragment } = render(<Form onSubmit={onSubmit} />);

    expect(asFragment()).toMatchSnapshot();
  });

  it('should handle submit', async () => {
    render(<Form onSubmit={onSubmit} />);

    const buttons = screen.getAllByRole('button');
    const calcButton = buttons[0];

    expect(calcButton).toHaveTextContent('Calcular');

    fireEvent.click(calcButton);

    await waitFor(() => {
      expect(submitFormMock).toHaveBeenCalled();
    });
  });

  it('should handle clear values', async () => {
    render(<Form onSubmit={onSubmit} />);

    const buttons = screen.getAllByRole('button');
    const calcButton = buttons[1];

    expect(calcButton).toHaveTextContent('Limpiar');

    fireEvent.click(calcButton);

    await waitFor(() => {
      expect(onClearValuesMock).toHaveBeenCalled();
    });
  });
});
