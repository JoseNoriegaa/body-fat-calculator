/* eslint-disable jsx-a11y/label-has-associated-control */
// External dependencies
import React from 'react';
import clsx from 'clsx';

// Internal dependencies
import TextInput, { Label, ErrorText } from '@/components/shared/TextInput';
import useStyles from './Form.styles';
import useForm, { IUseFormProps } from './hooks/useForm';

// Types & Interfaces

function Form({ onSubmit }: IUseFormProps) {
  const classes = useStyles();

  const { formik, clearValues } = useForm({ onSubmit });

  const isFemale = formik.values.isMale === 'false';

  return (
    <>
      <h1 className={classes.title}>Calculadora de Grasa Corporal</h1>

      <p className={classes.description}>
        El método de la Marian de Estados Unidos (US Navy Method) ofrece una manera sencilla de
        calcular un aproximado del porcentaje de tejido adiposo en el cuerpo de una persona.
      </p>

      <p className={classes.description}>
        Los valores requeridos por la fórmula son los siguientes:
      </p>

      <div className={classes.inputContainer}>
        <Label>Género</Label>

        <div className={classes.groupRadio}>
          <div className={classes.radioContainer}>
            <input
              id="input_man"
              name="isMale"
              type="radio"
              value="true"
              onChange={formik.handleChange}
            />
            <Label htmlFor="input_man">Hombre</Label>
          </div>

          <div className={classes.radioContainer}>
            <input
              id="input_woman"
              name="isMale"
              type="radio"
              value="false"
              onChange={formik.handleChange}
            />
            <Label htmlFor="input_woman">Mujer</Label>
          </div>

          {formik.errors.isMale && (
            <div className={classes.groupRadioError}>
              <ErrorText>{formik.errors.isMale}</ErrorText>
            </div>
          )}
        </div>
      </div>

      <div className={classes.inputContainer}>
        <TextInput
          name="height"
          label="Altura (cm)"
          placeholder="Ingresa tu altura"
          onChange={formik.handleChange}
          value={formik.values.height}
          error={formik.errors.height}
        />
      </div>

      <div className={classes.inputContainer}>
        <TextInput
          name="weight"
          label="Peso (kg)"
          placeholder="Ingresa tu peso"
          onChange={formik.handleChange}
          value={formik.values.weight}
          error={formik.errors.weight}
        />
      </div>

      <div className={classes.inputContainer}>
        <TextInput
          name="waist"
          label="Cintura (cm)"
          placeholder="Ingresa la medida de tu cintura"
          onChange={formik.handleChange}
          value={formik.values.waist}
          error={formik.errors.waist}
        />
      </div>

      {isFemale && (
        <div className={classes.inputContainer}>
          <TextInput
            name="hip"
            label="Cadera (cm)"
            placeholder="Ingresa la medida de tu cadera"
            onChange={formik.handleChange}
            value={formik.values.hip}
            error={formik.errors.hip}
          />
        </div>
      )}

      <div className={classes.inputContainer}>
        <TextInput
          name="neck"
          label="Cuello (cm)"
          placeholder="Ingresa la medida de tu cuello"
          onChange={formik.handleChange}
          value={formik.values.neck}
          error={formik.errors.neck}
        />
      </div>

      <div className={classes.actionsContainer}>
        <button
          type="button"
          className={clsx('reset-button', classes.btn, classes.btnSubmit)}
          // eslint-disable-next-line @typescript-eslint/no-misused-promises
          onClick={formik.submitForm}>
          Calcular
        </button>

        <button
          type="button"
          className={clsx('reset-button', classes.btn, classes.btnClear)}
          onClick={clearValues}>
          Limpiar
        </button>
      </div>
    </>
  );
}

export default Form;
