import { isNotEmpty } from './Label.lib';

describe('InputField Component Validations', () => {
  it('should validate that the input is not empty', () => {
    expect(isNotEmpty('some text')).toBe(true);
    expect(isNotEmpty('')).toBe(false);
    expect(isNotEmpty(' ')).toBe(false);
    expect(isNotEmpty('     ')).toBe(false);
  });
});