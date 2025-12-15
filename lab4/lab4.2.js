
const max = (Array) => {

  let maxNum = Array[0][0];
  for (let i = 0; i < Array.length; i++) {
    const currentArray = Array[i]; 
    for (let j = 0; j < currentArray.length; j++) {
      const currentElement = currentArray[j];
      if (currentElement > maxNum) {
        maxNum = currentElement;
      }
    }
  }

  return maxNum;
};
const m = max([[1, 2, 3], [4, 5, 6], [7, 8, 9]]);
console.log(m);