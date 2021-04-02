console.clear();
const isSubArray = (arr1, arr2) => {};

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
