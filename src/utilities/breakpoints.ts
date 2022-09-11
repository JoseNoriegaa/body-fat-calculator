// Internal dependencies
import { BREAK_POINTS } from '@/constants';

// Types & Interfaces
type TBreakPoint = keyof typeof BREAK_POINTS;

const get = (breakpoint: TBreakPoint) => {
  const size = BREAK_POINTS[breakpoint];
  return size;
};

const up = (breakpoint: TBreakPoint) => {
  const size = get(breakpoint);
  return `@media (min-width: ${size})`;
};

const down = (breakpoint: TBreakPoint) => {
  const size = get(breakpoint);
  return `@media (max-width: ${size})`;
};

const between = (minBreakpoint: TBreakPoint, maxBreakpoint: TBreakPoint) => {
  const minSize = get(minBreakpoint);
  const maxSize = get(maxBreakpoint);
  return `@media (max-width: ${minSize}) and (min-width: ${maxSize})`;
};

const breakpoints = {
  get,
  down,
  up,
  between,
};

export type { TBreakPoint };
export default breakpoints;
