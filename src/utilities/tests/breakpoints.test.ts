// Internal dependencies
import breakpoints, { TBreakPoint } from '../breakpoints';

describe('breakpoints', () => {
  describe('get', () => {
    it.each([
      ['xs', '0px'],
      ['sm', '600px'],
      ['md', '900px'],
      ['lg', '1200px'],
      ['xl', '1536px'],
    ] as [TBreakPoint, string][])(
      'given "%s" as breakpoint, should return %s',
      (breakpoint, size) => {
        const mediaQuery = breakpoints.get(breakpoint);

        expect(mediaQuery).toBe(size);
      }
    );
  });

  describe('up', () => {
    it.each([
      ['xs', '@media (min-width: 0px)'],
      ['sm', '@media (min-width: 600px)'],
      ['md', '@media (min-width: 900px)'],
      ['lg', '@media (min-width: 1200px)'],
      ['xl', '@media (min-width: 1536px)'],
    ] as [TBreakPoint, string][])(
      'given "%s" as breakpoint, should return %s',
      (breakpoint, expectedMediaQuery) => {
        const mediaQuery = breakpoints.up(breakpoint);

        expect(mediaQuery).toBe(expectedMediaQuery);
      }
    );
  });

  describe('down', () => {
    it.each([
      ['xs', '@media (max-width: 0px)'],
      ['sm', '@media (max-width: 600px)'],
      ['md', '@media (max-width: 900px)'],
      ['lg', '@media (max-width: 1200px)'],
      ['xl', '@media (max-width: 1536px)'],
    ] as [TBreakPoint, string][])(
      'given "%s" as breakpoint, should return %s',
      (breakpoint, expectedMediaQuery) => {
        const mediaQuery = breakpoints.down(breakpoint);

        expect(mediaQuery).toBe(expectedMediaQuery);
      }
    );
  });

  describe('between', () => {
    it.each([
      ['xs', 'sm', '@media (max-width: 0px) and (min-width: 600px)'],
      ['sm', 'md', '@media (max-width: 600px) and (min-width: 900px)'],
      ['md', 'lg', '@media (max-width: 900px) and (min-width: 1200px)'],
      ['lg', 'xl', '@media (max-width: 1200px) and (min-width: 1536px)'],
    ] as [TBreakPoint, TBreakPoint, string][])(
      'given "%s" as breakpoint, should return %s',
      (breakpoint1, breakpoint2, expectedMediaQuery) => {
        const mediaQuery = breakpoints.between(breakpoint1, breakpoint2);

        expect(mediaQuery).toBe(expectedMediaQuery);
      }
    );
  });
});
