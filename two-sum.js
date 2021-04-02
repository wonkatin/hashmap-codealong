console.clear()
//find whether the given array has a pair of numbers that add up to the target
// the handshake problem
// const twoSum = (numbers, target) => {
//     for (const num1 of numbers) {
//         console.log('num1:', num1)
//         for (const num2 of numbers)
//         console.log('-num2:', num2)
//     }
// }

const twoSum = (numbers, target) => {
  // store the numbers we have seen so far
   const hash = {}
   for (const number of numbers){
       console.log('number:', number)
       console.log('looking for:', target - number)
       hash[number] = true;
    //    console.log('hash:', hash)
       if(hash[target-number]) {
           console.log('we found it', number)
           return true
       } 

   }
   return false
}


const result1 = twoSum([5, 3, 4, 8], 11)
const result2 = twoSum([5, 3, 6, 8], 22)
// twoSum([5, 3, 6, 8], 11)

console.log('result1 should be true and is: ', result1)
console.log('result2 should be false and is: ', result2)

// to run the file type nodemon two-sum.js