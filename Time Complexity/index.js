function sumOfArray(nums){
    let sum = 0;
    for(let i = 0; i< nums.length; i++){
        sum += nums[i];
    }
    return sum;
}
// console.log(sumOfArray([2,4,8]))// Time complexity: O(n)

function sumOfMatrix(nums){
    let sum = 0;
    for(let i = 0; i< nums.length; i++){
       for(let j = 0; j< nums.length; j++){
        sum += nums[i][j]
       }
    }
    return sum;
}
const matrix = [[2,4,8],[1,2,3],[5,6,7]]
// console.log(sumOfMatrix(matrix))// Time complexity: O(n^2)

function fn(nums){
    let arr = [];
    for(let i = 1; i < nums; i=i*2){
        arr.push(i)
    }
    return arr;
}
console.log(fn(16))// Time complexity: O(log2^n) = O(log n) (base 2).

function sumOfDigits(num) {
    let sum = 0;
    while (num > 0) {
      sum += num % 10;
      num = Math.floor(num / 10);
    }
    return sum;
  }
  // console.log(sumOfDigits(1287)); // 18 // Time complexity: O(log10^n) = O(log n) (base 10).
