const difference = (array1, array2) => {
  const set2 = new Set(array2);
  return array1.filter(item => !set2.has(item));
};

const array1_1 = [7, -2, 10, 5, 0];
const array1_2 = [0, 10];
const result1 = difference(array1_1, array1_2);
console.log(result1);

const array2_1 = ['Beijing', 'Kiev'];
const array2_2 = ['Kiev', 'London', 'Baghdad'];
const result2 = difference(array2_1, array2_2);
console.log(result2);