const calc = require('../lib/calculator');

describe('Calculator basic operations', () => {
  test('addition: 2 + 3 = 5', () => {
    expect(calc.add(2, 3)).toBe(5);
  });

  test('subtraction: 10 - 4 = 6', () => {
    expect(calc.sub(10, 4)).toBe(6);
  });

  test('multiplication: 45 * 2 = 90', () => {
    expect(calc.mul(45, 2)).toBe(90);
  });

  test('division: 20 / 5 = 4', () => {
    expect(calc.div(20, 5)).toBe(4);
  });

  test('division by zero throws', () => {
    expect(() => calc.div(1, 0)).toThrow('Division by zero');
  });

  test('floating point addition close to 0.3', () => {
    expect(calc.add(0.1, 0.2)).toBeCloseTo(0.3, 5);
  });

  test('negative numbers subtraction', () => {
    expect(calc.sub(-5, -3)).toBe(-2);
  });

  // New operation tests
  test('modulo: 10 % 3 = 1', () => {
    expect(calc.mod(10, 3)).toBe(1);
  });

  test('modulo by zero throws', () => {
    expect(() => calc.mod(5, 0)).toThrow('Modulo by zero');
  });

  test('exponentiation: 2 ** 8 = 256', () => {
    expect(calc.pow(2, 8)).toBe(256);
  });

  test('square root: sqrt(25) = 5', () => {
    expect(calc.sqrt(25)).toBe(5);
  });

  test('square root of negative throws', () => {
    expect(() => calc.sqrt(-4)).toThrow('Square root of negative number');
  });
});
