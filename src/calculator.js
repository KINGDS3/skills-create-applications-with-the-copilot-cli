#!/usr/bin/env node

// Simple Node.js CLI calculator
// Supported operations:
// - add: addition
// - sub: subtraction
// - mul: multiplication
// - div: division

const { add, sub, mul, div } = require('./lib/calculator');
const [,, op, aStr, bStr] = process.argv;
function usage(){
  console.error('Usage: node src/calculator.js <add|sub|mul|div> <num1> <num2>');
  process.exit(2);
}

if (!op || aStr === undefined || bStr === undefined) usage();

const a = Number(aStr);
const b = Number(bStr);
if (Number.isNaN(a) || Number.isNaN(b)) {
  console.error('Error: operands must be valid numbers');
  process.exit(2);
}

try {
  let result;
  switch (op) {
    case 'add':
      result = add(a, b);
      break;
    case 'sub':
      result = sub(a, b);
      break;
    case 'mul':
      result = mul(a, b);
      break;
    case 'div':
      result = div(a, b);
      break;
    default:
      usage();
  }
  console.log(result);
} catch (err) {
  console.error('Error:', err.message);
  process.exit(1);
}
