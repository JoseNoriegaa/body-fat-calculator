// External dependencies
import React, { useMemo, useState, useRef, useLayoutEffect } from 'react';

// Internal dependencies
import { BODY_FAT_CATEGORIES } from '@/constants';
import useStyles from './BodyFatScale.styles';

// Types & Interfaces
interface IBodyFatScaleProps {
  bodyFatPercentage: number;
  isMale: boolean;
}

function BodyFatScale({ bodyFatPercentage, isMale }: IBodyFatScaleProps) {
  const scaleRef = useRef<HTMLDivElement>(null);
  const [scaleComponentWidth, setScaleComponentWidth] = useState<number>(0);

  const classes = useStyles();

  useLayoutEffect(() => {
    if (scaleRef.current) {
      setScaleComponentWidth(scaleRef.current.offsetWidth);
    }
  }, []);

  const pointerPosition = useMemo(() => {
    const percentage = Math.min((bodyFatPercentage * 100) / 33, 100);

    if (scaleComponentWidth * (percentage / 100) < 60) {
      return '60px';
    }

    return `${percentage}%`;
  }, [bodyFatPercentage, scaleComponentWidth]);

  const categories = isMale ? BODY_FAT_CATEGORIES.MALE : BODY_FAT_CATEGORIES.FEMALE;

  return (
    <>
      <h3 className={classes.title}>Tu resultado: {bodyFatPercentage.toFixed(1)}%</h3>

      <div className={classes.scaleOuterContainer}>
        <div className={classes.pointerIndicator} style={{ left: pointerPosition }}>
          <span className={classes.percentage}>{bodyFatPercentage.toFixed(1)}%</span>
          <div className={classes.pointerIndicatorIcon} />
        </div>

        <div ref={scaleRef} className={classes.scaleContainer} />

        <div className={classes.indicators}>
          {categories.map((category) => (
            <div className={classes.indicatorContainer} key={category.description}>
              <div className={classes.indicatorColor} />

              <span className={classes.indicatorPercentage}>{category.value}</span>
              <p className={classes.indicatorText}>{category.description}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default BodyFatScale;
