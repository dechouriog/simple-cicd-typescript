"use strict";

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
(window as any).sum = sum;
(window as any).subtract = subtract;
(window as any).multiply = multiply;
(window as any).divide = divide;