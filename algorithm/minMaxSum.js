const readline = require("readline");

const countNumberOfElements = (array) => {
  return array.length;
};

const findMinValue = (array) => {
  return Math.min(...array);
};

const findMaxValue = (array) => {
  return Math.max(...array);
};

const findEvenElements = (array) => {
  return array.filter((element) => element % 2 == 0);
};

const findOddElements = (array) => {
  return array.filter((element) => element % 2 !== 0);
};

const findSum = (array) => {
  const sum = array.reduce((acc, curr) => acc + curr, 0);
  return sum;
};

const findMinMaxSum = (array) => {
  const sum = findSum(array);
  const minSum = sum - findMaxValue(array);
  const maxSum = sum - findMinValue(array);
  return [minSum, maxSum];
};

const inputFromKeyboard = () => {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  return new Promise((resolve) => {
    rl.question(
      "Enter the elements of the array, separated by spaces (example: 1 2 3 4 5): ",
      (input) => {
        rl.close();
        const array = input.split(" ").map((item) => Number(item.trim()));
        resolve(array);
      }
    );
  });
};

async function main() {
  const array = await inputFromKeyboard();
  const [minSum, maxSum] = findMinMaxSum(array);

  console.log(minSum, maxSum);
  console.log("The sum of an array: ", findSum(array));
  console.log("Number of Elements in an array: ", countNumberOfElements(array));
  console.log("Minimum value of an array: ", findMinValue(array));
  console.log("Minimum value of an array: ", findMaxValue(array));
  console.log("Even elements in array: ", findEvenElements(array));
  console.log("Odd elements in array: ", findOddElements(array));
}

main();
