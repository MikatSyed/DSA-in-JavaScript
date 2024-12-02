// Question 1: Sum of all natural numbers from 1 to n
function sumOfNaturalNumber(num) {
  let sum = 0;
  for (let i = 1; i <= num; i++) {
    sum = sum + i;
  }
  return sum;
}

// console.log(sumOfNaturalNumber(5)); // 15
// console.log(sumOfNaturalNumber(10)); // 55
// console.log(sumOfNaturalNumber(8)); // 36

// Question 2: Sum of digits of a number
function sumOfDigits(num) {
  let sum = 0;
  while (num > 0) {
    sum += num % 10;
    num = Math.floor(num / 10);
  }
  return sum;
}

// console.log(sumOfDigits(1287)); // 18

// Question 3: Count the number of digits of a number
function countDigits(num) {
  num = Math.abs(num);
  let count = 0;
  do {
    count++;
    num = Math.floor(num / 10);
  } while (num > 0);
  return count;
}

// console.log(countDigits(121)); // 3
// console.log(countDigits(-1211413131)); // 10

// Question 4: Check if a number is palindrome
let isPalindrome = function (x) {
  let copyNum = x,
    reverseNum = 0;

  while (copyNum > 0) {
    const lastDigit = copyNum % 10;
    reverseNum = reverseNum * 10 + lastDigit;
    copyNum = Math.floor(copyNum / 10);
  }

  return x === reverseNum;
};

// console.log(isPalindrome(121)); // true
// console.log(isPalindrome(1234)); // false

// Question 5: Find nth Fibonacci number
// The Fibonacci numbers, commonly denoted F(n) form a sequence, called the Fibonacci sequence, such that each number is the sum of the two preceding ones, starting from 0 and 1.

let fib = function (n) {
  if (n < 2) {
    return n;
  }

  let prev = 0,
    curr = 1,
    next;
  for (let i = 2; i <= n; i++) {
    next = prev + curr;
    prev = curr;
    curr = next;
  }
  return next;
};

// Fibonacci Sequence: 0 1 1 2 3 5 8...
// console.log(fib(5)); // 5
// console.log(fib(10)); // 55

// Question 6: Missing Number in an Array
// Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array.

let missingNumber = function (nums) {
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
  }
  return (nums.length * (nums.length + 1)) / 2 - sum;
};

// One Line Solution:
// let missingNumber = (nums) => nums.length*(nums.length+1)/2 - nums.reduce((acc, num) => num + acc);

// console.log(missingNumber([3,0,1])); // 2
// console.log(missingNumber([9,6,4,2,3,5,7,0,1])); // 8

// Count Odd Numbers in an Interval Range

var countOdds = function (low, high) {
  if (low % 2 === 0) low++;
  if (high % 2 === 0) high--;

  return low > high ? 0 : Math.floor((high - low) / 2) + 1;
};

// console.log(countOdds(2, 7)); // Output: 3

// Fizz Buzz
// var fizzBuzz = function (n) {
//   let str = [];
//   for (let i = 1; i <= n; i++) {
//     if (i % 3 === 0 && i % 5 === 0) {
//       str.push("FizzBuzz");
//     } else if (i % 3 === 0) {
//       str.push("Fizz");
//     } else if (i % 5 === 0) {
//       str.push("Buzz");
//     } else {
//       str.push(i.toString());
//     }
//   }
//   return str;
// };
// console.log(fizzBuzz(30));

//Power of Two
var isPowerOfTwo = function(n) {
    if (n <= 0) return false; 
    while (n > 1) {
        if (n % 2 !== 0) return false; 
        n = n / 2;
    }
    return true;
};

var isPowerOfTwo = function(n) {
    // A number is a power of two if it is > 0 and has only one bit set
    return n > 0 && (n & (n - 1)) === 0;
};


console.log(isPowerOfTwo(1))

//Sqrt(x)
var mySqrt = function(x) {
    let left = 0, right = x, answer = 0;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        let square = mid * mid;

        if (square === x) {
            return mid; 
        } else if (square < x) {
            answer = mid; 0
            left = mid + 1; 
        } else {
            right = mid - 1; 
        }
    }

    return answer; 
};
console.log(mySqrt(8))
