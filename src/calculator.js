#!/usr/bin/env node

/**
 * Node.js CLI Calculator
 * Supported operations:
 * - addition
 * - subtraction
 * - multiplication
 * - division
 * - modulo
 * - power (exponentiation)
 * - square root
 *
 * Usage:
 *   node src/calculator.js add 2 3
 *   node src/calculator.js sub 5 2
 *   node src/calculator.js mul 4 2.5
 *   node src/calculator.js div 10 4
 *   node src/calculator.js mod 10 3
 *   node src/calculator.js pow 2 8
 *   node src/calculator.js sqrt 9
 */

function printUsage() {
  console.error('Usage: node src/calculator.js <operation> <num1> <num2>');
  console.error('Operations: add, sub, mul, div, mod, pow, sqrt');
}

function toNumber(val) {
  const n = Number(val);
  if (Number.isNaN(n)) {
    throw new Error(`Invalid number: ${val}`);
  }
  return n;
}

// Mathematical helper functions added per feature request

// modulo(a, b) - returns the remainder of a divided by b
function modulo(a, b) {
  if (b === 0) throw new Error('Modulo by zero');
  return a % b;
}

// power(base, exponent) - returns base raised to the exponent
function power(base, exponent) {
  return Math.pow(base, exponent);
}

// squareRoot(n) - returns the square root of n with error handling for negative numbers
function squareRoot(n) {
  if (n < 0) throw new Error('Cannot compute square root of negative number');
  return Math.sqrt(n);
}

const [, , op, aStr, bStr] = process.argv;

if (!op || !aStr) {
  printUsage();
  process.exit(1);
}

try {
  let result;

  switch (op) {
    case 'add':
    case '+':
      // addition
      if (bStr === undefined) throw new Error('Two operands required');
      result = toNumber(aStr) + toNumber(bStr);
      break;
    case 'sub':
    case '-':
      // subtraction
      if (bStr === undefined) throw new Error('Two operands required');
      result = toNumber(aStr) - toNumber(bStr);
      break;
    case 'mul':
    case 'x':
    case '*':
      // multiplication
      if (bStr === undefined) throw new Error('Two operands required');
      result = toNumber(aStr) * toNumber(bStr);
      break;
    case 'div':
    case '/':
      // division
      if (bStr === undefined) throw new Error('Two operands required');
      const dividend = toNumber(aStr);
      const divisor = toNumber(bStr);
      if (divisor === 0) throw new Error('Division by zero');
      result = dividend / divisor;
      break;
    case 'mod':
    case '%':
      // modulo
      if (bStr === undefined) throw new Error('Two operands required');
      result = modulo(toNumber(aStr), toNumber(bStr));
      break;
    case 'pow':
    case '^':
      // power (exponentiation)
      if (bStr === undefined) throw new Error('Two operands required');
      result = power(toNumber(aStr), toNumber(bStr));
      break;
    case 'sqrt':
      // square root (single operand)
      result = squareRoot(toNumber(aStr));
      break;
    default:
      throw new Error(`Unknown operation: ${op}`);
  }

  console.log(result);
} catch (err) {
  console.error('Error:', err.message);
  process.exit(1);
}
