//Write your solutions in this file, don't forget to test your functions.
const countFromOne = (int) => {
  for (let i = 1; i <= int; i++) {
    console.log(i);
  }
};
//countFromOne(10);

const countEveryOdd = (int) => {
  for (let i = 1; i <= int; i++) {
    if (i % 2 !== 0) {
      console.log(i);
    }
  }
};
//countEveryOdd(20);

const isNegative = (num) => {
  if (num > 0) {
    return false;
  } else {
    return true;
  }
};
//console.log(isNegative(-1))

const betweenFiveAndTwenty = (int) => {
  if (int > 5 && int < 20) {
    return true;
  } else {
    return false;
  }
};
//console.log(betweenFiveAndTwenty(15))

const sumOfThreeOrFive = () => {
  let counter = 0;
  for (let i = 1; i < 1000; i++) {
    if (i % 3 == 0 || i % 5 == 0) {
      counter += i;
    }
  }
  return counter;
};
//console.log(sumOfThreeOrFive());

const isAllLowerCase = () => {
  if (string.toLowercase) {
    return true;
  } else {
    return false;
  }
};
console.log(isAllLowerCase("woopsie"));
