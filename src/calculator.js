#!/usr/bin/env node

/**
 * Node.js CLI Calculator
 * Supported operations:
 * - addition
 * - subtraction
 * - multiplication
 * - division
 *
 * Usage:
 *   node src/calculator.js add 2 3
 *   node src/calculator.js sub 5 2
 *   node src/calculator.js mul 4 2.5
 *   node/src/calculator.js div 10 4
 */

function printUsage() {
  console.error('Usage: node src/calculator.js <operation> <num1> <num2>');
  console.error('Operations: add, sub, mul, div');
}

function toNumber(val) {
  const n = Number(val);
  if (Number.isNaN(n)) {
    console.error(`Invalid number: ${val}`);
    process.exit(1);
  }
  return n;
}

const [, , op, aStr, bStr] = process.argv;

if (!op || !aStr || !bStr) {
  printUsage();
  process.exit(1);
}

const a = toNumber(aStr);
const b = toNumber(bStr);

let result;
switch (op) {
  case 'add':
  case '+':
    // addition
    result = a + b;
    break;
  case 'sub':
  case '-':
    // subtraction
    result = a - b;
    break;
  case 'mul':
  case 'x':
  case '*':
    // multiplication
    result = a * b;
    break;
  case 'div':
  case '/':
    // division
    if (b === 0) {
      console.error('Error: Division by zero');
      process.exit(1);
    }
    result = a / b;
    break;
  default:
    console.error(`Unknown operation: ${op}`);
    printUsage();
    process.exit(1);
}

console.log(result);
