#!/usr/bin/env node

// Simple CLI calculator supporting: add, sub, mul, div
const [,, op, aStr, bStr] = process.argv;
function usage(){
  console.error('Usage: node calculator.js <add|sub|mul|div> <num1> <num2>');
  process.exit(2);
}

if (!op || aStr === undefined || bStr === undefined) usage();

const a = Number(aStr);
const b = Number(bStr);
if (Number.isNaN(a) || Number.isNaN(b)) {
  console.error('Error: operands must be valid numbers');
  process.exit(2);
}

let result;
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
  default:
    usage();
}

console.log(result);
