const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(nums) {
  let sum = 0;
	for(num of nums) {
    sum += num;
  }
  return sum;
};

const multiply = function(nums) {
  let product = 1;
	for(num of nums) {
    product *= num;
  }
  return product;
};

const power = function(num1, num2) {
	return num1 ** num2;
};

const factorial = function(num) {
	if(num <= 1)
    return 1;

  let solution = 1;
  for(let i=num; i>=1; i--)
    solution *= i;

  return solution;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
