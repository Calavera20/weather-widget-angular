import { CapitalizeFirstLetterPipe } from './capitalize-first-letter.pipe';

describe('CapitalizeFirstLetterPipe', () => {
  const pipe = new CapitalizeFirstLetterPipe();

  it('transforms "example" to "Example"', () => {
    expect(pipe.transform('example')).toBe('Example');
  });

  it('does not change the case of "Example"', () => {
    expect(pipe.transform('Example')).toBe('Example');
  });

  it('returns empty string if input is an empty string', () => {
    expect(pipe.transform('')).toBe('');
  });

  it('returns undefined if input is undefined', () => {
    expect(pipe.transform(undefined)).toBeUndefined();
  });

  it('returns null if input is null', () => {
    expect(pipe.transform(null)).toBeNull();
  });
});
