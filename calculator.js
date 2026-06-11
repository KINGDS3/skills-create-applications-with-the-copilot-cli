#!/usr/bin/env node

// Simple CLI calculator supporting: add, sub, mul, div, mod, pow, sqrt
const [,, op, aStr, bStr] = process.argv;
function usage(){
  console.error('Usage: node calculator.js <add|sub|mul|div|mod|pow|sqrt> <num1> <num2>');
  console.error('  For sqrt: node calculator.js sqrt <num>');
  process.exit(2);
}

function modulo(a, b) {
  return a % b;
}

function power(base, exponent) {
  return Math.pow(base, exponent);
}

function squareRoot(n) {
  if (n < 0) {
    throw new RangeError('square root of negative number');
  }
  return Math.sqrt(n);
}

if (!op) usage();

let result;

if (op === 'sqrt') {
  if (aStr === undefined) usage();
  const n = Number(aStr);
  if (Number.isNaN(n)) {
    console.error('Error: operand must be a valid number');
    process.exit(2);
  }
  try {
    result = squareRoot(n);
  } catch (e) {
    console.error('Error: ' + e.message);
    process.exit(1);
  }
} else {
  if (aStr === undefined || bStr === undefined) usage();
  const a = Number(aStr);
  const b = Number(bStr);
  if (Number.isNaN(a) || Number.isNaN(b)) {
    console.error('Error: operands must be valid numbers');
    process.exit(2);
  }

  switch (op) {
    case 'add':
      result = a + b;
      break;
    case 'sub':
      result = a - b;
      break;
    case 'mul':
      result = a * b;
      break;
    case 'div':
      if (b === 0) {
        console.error('Error: division by zero');
        process.exit(1);
      }
      result = a / b;
      break;
    case 'mod':
    case 'modulo':
      if (b === 0) {
        console.error('Error: modulo by zero');
        process.exit(1);
      }
      result = modulo(a, b);
      break;
    case 'pow':
    case 'power':
      result = power(a, b);
      break;
    default:
      usage();
  }
}

console.log(result);
