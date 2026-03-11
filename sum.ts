"use strict";

declare global {
  interface Window {
    sum: (a: number, b: number) => number;
    subtract: (a: number, b: number) => number;
    multiply: (a: number, b: number) => number;
    divide: (a: number, b: number) => number;
  }
}

/**
 * Returns the sum of two numbers.
 */
function sum(a: number, b: number): number {
  return a + b;
}

/**
 * Returns the subtraction of two numbers.
 */
function subtract(a: number, b: number): number {
  return a - b;
}

/**
 * Returns the multiplication of two numbers.
 */
function multiply(a: number, b: number): number {
  return a * b;
}

/**
 * Returns the division of two numbers.
 */
function divide(a: number, b: number): number {
  if (b === 0) {
    throw new Error("Division by zero is not allowed");
  }
  return a / b;
}

/* expose functions to window */
window.sum = sum;
window.subtract = subtract;
window.multiply = multiply;
window.divide = divide;

