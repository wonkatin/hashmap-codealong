console.clear();
const isSubArray = (arr1, arr2) => {
  const hash = {}
  // for (const word of arr1) {
  //   hash[word] = word
  //   console.log(hash)
  // }
  // for (const word2 of arr2) {
  //   if(hash[word2]) {
  //     console.log()
  //     return true
  //   }
  // }

  for (const element of arr1) {
    if(hash[element]=== undefined){
      hash[element] = 1
      console.log(hash)
    } else {
      hash[element] = hash[element] + 1
    }
  }
  for (const element of arr2) {
  //  if(hash[element]=== undefined) {
    if(!hash[element]) {
     return false
   } else {
     hash[element] = hash[element] -1
   }
  }
  return true
};

const result1 = isSubArray(
  ["hey", "what", "is", "up", "with", "hashmap"],
  ["up", "with", "hashmap"]
);

const result2 = isSubArray(
  ["hey", "what", "is", "up", "with", "hashmap"],
  ["hashmap", "is", "what", "is", "up", "baby"]
);

const result3 = isSubArray(
  ["hey", "what", "is", "up", "with", "hashmap"],
  ["down", "with", "hashmap"]
);

console.log("result 1 should be true, and it is: ", result1);
console.log("result 2 should be false, and it is: ", result2);
console.log("result 3 should be false, and it is: ", result3);
