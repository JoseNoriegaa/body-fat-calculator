// External dependencies
import { act, renderHook, waitFor } from '@testing-library/react';

// Internal dependencies
import useForm from '../useForm';

// Mocks
const onSubmitMock = jest.fn();

const changeValue = <T extends ReturnType<typeof useForm>['formik']>(
  formik: T,
  field: keyof T['values'],
  value: string
) => {
  formik.handleChange({ target: { name: field, value } });
};

describe('useForm', () => {
  beforeEach(() => {
    onSubmitMock.mockReset();
  });

  it('should call onSubmit when all the fields are correct', async () => {
    const { result } = renderHook(() => useForm({ onSubmit: onSubmitMock }));

    const { formik } = result.current;

    act(() => {
      changeValue(formik, 'isMale', 'true');
      changeValue(formik, 'height', '100');
      changeValue(formik, 'neck', '100');
      changeValue(formik, 'waist', '100');
      changeValue(formik, 'weight', '100');
    });

    act(() => {
      // eslint-disable-next-line no-void
      void formik.submitForm();
    });

    await waitFor(() => {
      expect(onSubmitMock).toHaveBeenCalledWith({
        isMale: true,
        hip: undefined,
        height: 100,
        neck: 100,
        waist: 100,
        weight: 100,
      });
    });
  });

  it('should call onSubmit when clearing the form values', async () => {
    const { result } = renderHook(() => useForm({ onSubmit: onSubmitMock }));

    const { clearValues } = result.current;

    act(() => {
      clearValues();
    });

    expect(onSubmitMock).toHaveBeenCalledWith(null);
  });

  it('should return an error if isMale is false and hip was not provided', async () => {
    const { result } = renderHook(() => useForm({ onSubmit: onSubmitMock }));

    const { formik } = result.current;

    act(() => {
      changeValue(formik, 'isMale', 'false');
      changeValue(formik, 'height', '100');
      changeValue(formik, 'neck', '100');
      changeValue(formik, 'waist', '100');
      changeValue(formik, 'weight', '100');
    });

    await act(async () => {
      await formik.submitForm();
    });

    await waitFor(() => {
      expect(result.current.formik.errors.hip).toBe('Ingrese un número válido');
    });
  });
});
