"use strict";

/**
 * Returns the sum of two numbers.
 */
function sum(a, b) {
  return a + b;
}

/**
 * Returns the subtraction of two numbers.
 */
function subtract(a, b) {
  return a - b;
}

/**
 * Returns the multiplication of two numbers.
 */
function multiply(a, b) {
  return a * b;
}

/**
 * Returns the division of two numbers.
 */
function divide(a, b) {
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