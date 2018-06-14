/* Equal Sides Of An Array
 You are going to be given an array of integers. Your job is to take that array and find an index N where the sum of the integers to the left of N is equal to the sum of the integers to the right of N. If there is no index that would make this happen, return -1.
http://www.codewars.com/kata/equal-sides-of-an-array/train/javascript
*/

function findEvenIndex(arr)
{
  if (arr.length === 0) {
      return 0;
  }
  let sumOfLeft = 0;
  let sumOfRight = 0;
  arr.forEach((number) => sumOfRight += number);
  sumOfRight -= arr[0];
  
  for (let i = 0; i < arr.length - 1; i++) {
      if (sumOfRight === sumOfLeft) {
      return i;
      }
      sumOfLeft += arr[i];
      sumOfRight -= arr[i+1];
  }
  return -1;
}