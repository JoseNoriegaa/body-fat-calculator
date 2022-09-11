// External components
import React, { useState } from 'react';
import Head from 'next/head';

// Internal components
import Header from '@/components/shared/Header';
import Container from '@/components/shared/Container';
import calculateMaleBodyFatPercentage from '@/utilities/calculateMaleBodyFatPercentage';
import calculateFemaleBodyFatPercentage from '@/utilities/calculateFemaleBodyFatPercentage';
import Form from './Form';
import { TFormParsedValues } from './hooks/useForm';
import useStyles from './index.styles';
import BodyFatScale from './BodyFatScale';

// Types & interfaces
type BodyFatProfile = {
  isMale: boolean;
  percentage: number;
};

function BodyFatCalculator() {
  const classes = useStyles();

  const [profile, setProfile] = useState<BodyFatProfile | null>(null);

  const onFormSubmit = (formValues: TFormParsedValues | null) => {
    if (formValues === null) {
      setProfile(null);
      return;
    }

    if (formValues.isMale) {
      setProfile({
        percentage: calculateMaleBodyFatPercentage(
          formValues.height,
          formValues.weight,
          formValues.waist,
          formValues.neck
        ),
        isMale: true,
      });
    } else {
      setProfile({
        percentage: calculateFemaleBodyFatPercentage(
          formValues.height,
          formValues.weight,
          formValues.waist,
          formValues.hip,
          formValues.neck
        ),
        isMale: false,
      });
    }
  };

  return (
    <>
      <Head>
        <title>Health Overview</title>
      </Head>

      <Header />

      <Container className={classes.container}>
        <div className={classes.formContainer}>
          <Form onSubmit={onFormSubmit} />
        </div>

        {profile !== null && (
          <>
            <div className={classes.mobileDivider} />

            <div className={classes.resultContainer}>
              <BodyFatScale bodyFatPercentage={profile.percentage} isMale={profile.isMale} />
            </div>
          </>
        )}
      </Container>
    </>
  );
}

export default BodyFatCalculator;
