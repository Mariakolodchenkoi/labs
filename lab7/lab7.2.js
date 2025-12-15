const removeElements = (array, ...itemsToRemove) => {
  for (const item of itemsToRemove) {
    const index = array.indexOf(item);
    if (index !== -1) {
      array.splice(index, 1);
    }
  }
};
const array1 = [1, 2, 3, 4, 5, 6, 7];
removeElements(array1, 5, 1, 6);
console.log(array1);

const array2 = ['Kiev', 'Beijing', 'Lima', 'Split'];
removeElements(array2, 'Lima', 'Berlin', 'Kiev');
console.log(array2);