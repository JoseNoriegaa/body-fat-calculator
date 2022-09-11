// External dependencies
import { useFormik, yupToFormErrors } from 'formik';
import * as yup from 'yup';

// Types & Interfaces

type TFormParsedValues =
  | {
      isMale: true;
      height: number;
      weight: number;
      waist: number;
      neck: number;
    }
  | {
      isMale: false;
      hip: number;
      height: number;
      weight: number;
      waist: number;
      neck: number;
    };

type TFormValues = {
  isMale: string;
  height: string;
  weight: string;
  hip?: string;
  waist: string;
  neck: string;
};

interface IUseFormProps {
  onSubmit: (values: TFormParsedValues | null) => void;
}

// Constants
const INT_REGEXP = /^(?![0]+)[1-9][0-9]*?$/;
const FLOAT_REGEXP = /^(?![0]+)[1-9][0-9]*(\.[0-9]{1,})?$/;

const formSchema = yup.object().shape({
  isMale: yup.boolean().required('Campo requerido'),
  height: yup
    .string()
    .trim('Campo no válido')
    .matches(INT_REGEXP, 'Ingrese un número válido')
    .required('Campo requerido'),
  neck: yup
    .string()
    .trim('Campo no válido')
    .matches(FLOAT_REGEXP, 'Ingrese un número válido')
    .required('Campo requerido'),
  waist: yup
    .string()
    .trim('Campo no válido')
    .matches(FLOAT_REGEXP, 'Ingrese un número válido')
    .required('Campo requerido'),
  weight: yup
    .string()
    .trim('Campo no válido')
    .matches(FLOAT_REGEXP, 'Ingrese un número válido')
    .required('Campo requerido'),
});

const hipSchema = yup.object().shape({
  hip: yup
    .string()
    .trim('Campo no válido')
    .matches(FLOAT_REGEXP, 'Ingrese un número válido')
    .required('Campo requerido'),
});

const INITIAL_VALUES = {
  isMale: 'true',
  height: '',
  neck: '',
  waist: '',
  hip: '',
  weight: '',
};

function useForm({ onSubmit }: IUseFormProps) {
  const formik = useFormik<TFormValues>({
    initialValues: INITIAL_VALUES,
    validationSchema: formSchema,
    validate: async (values) => {
      try {
        await formSchema.validate(values, { abortEarly: false });
      } catch (error) {
        return yupToFormErrors(error);
      }

      if (values.isMale === 'false' && !values.hip) {
        try {
          await hipSchema.validate(values, { abortEarly: false });
        } catch (error) {
          return yupToFormErrors(error);
        }
      }

      return Promise.resolve();
    },
    onSubmit(values) {
      const parsedValues = {
        isMale: values.isMale === 'true',
        height: parseInt(values.height, 10),
        neck: parseFloat(values.neck),
        waist: parseFloat(values.waist),
        weight: parseFloat(values.weight),
        hip: values.hip ? parseFloat(values.hip) : undefined,
      } as TFormParsedValues;

      onSubmit(parsedValues);
    },
  });

  const clearValues = () => {
    formik.resetForm();

    onSubmit(null);
  };

  return {
    formik,
    clearValues,
  };
}

export type { IUseFormProps, TFormParsedValues };
export default useForm;
