function hasTargetSum(array, target) {
  // Write your algorithm here

  let hash = false

  array.forEach((num, index) => {
    let difference = target - num
    if (array.includes(difference) && array.indexOf(difference) !== index) {
      hash = true
    }
  }

  )
  return hash


}

/* 
  Write the Big O time complexity of your function here
  0 =  1 + n + n*2 + 1 + 1
  0 = 3n + 3
  0 = n
  0(n)
*/

/* 
  Add your pseudocode here
  1. loop through array
  2. find difference between target and current number
  3. check if difference is in array
  4. if yes, return true
  5. if no, return false
*/

/*
  Add written explanation of your solution here
  I looped through the array and found the difference between the target and the current number. Then I checked if that difference was in the array. If it was, I returned true. If it wasn't, I returned false.
  

*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));
  console.log("");
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));
  console.log("");
  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}
module.exports = hasTargetSum;