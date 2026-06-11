#!/usr/bin/env node

// Simple Node.js CLI calculator
// Supported operations:
// - add: addition
// - sub: subtraction
// - mul: multiplication
// - div: division
// - mod: modulo
// - pow: exponentiation (a ^ b)
// - sqrt: square root (single operand)

const calc = require('./lib/calculator');
const [,, op, aStr, bStr] = process.argv;
function usage(){
  console.error('Usage: node src/calculator.js <add|sub|mul|div|mod|pow|sqrt> <num1> [num2]');
  process.exit(2);
}

if (!op || aStr === undefined) usage();

const a = Number(aStr);
const b = bStr === undefined ? undefined : Number(bStr);
if (Number.isNaN(a) || (bStr !== undefined && Number.isNaN(b))) {
  console.error('Error: operands must be valid numbers');
  process.exit(2);
}

try {
  let result;
  switch (op) {
    case 'add':
      if (b === undefined) usage();
      result = calc.add(a, b);
      break;
    case 'sub':
      if (b === undefined) usage();
      result = calc.sub(a, b);
      break;
    case 'mul':
      if (b === undefined) usage();
      result = calc.mul(a, b);
      break;
    case 'div':
      if (b === undefined) usage();
      result = calc.div(a, b);
      break;
    case 'mod':
      if (b === undefined) usage();
      result = calc.mod(a, b);
      break;
    case 'pow':
      if (b === undefined) usage();
      result = calc.pow(a, b);
      break;
    case 'sqrt':
      // sqrt uses only a
      result = calc.sqrt(a);
      break;
    default:
      usage();
  }
  console.log(result);
} catch (err) {
  console.error('Error:', err.message);
  process.exit(1);
}
