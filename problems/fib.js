// 1- fibonacci sequence.
// this is a basic recursive solution

// 1,1,2,3,5,8,13,21,33,54 ...
export const fib = (n) => {
  if (n <= 2) return 1;
  return fib(n - 1) + fib(n - 2);
};
// time complexity : 2^n

// this solution works as long as given number is not a large number

export const betterFib = (n, memo = {}) => {
  if (n in memo) return memo[n];
  if (n <= 2) return 1;
  memo[n] = fib(n - 1, memo) + fib(n - 2, memo);
  return memo[n];
};
