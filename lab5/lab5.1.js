function seq (...args) {
  let array = [...args];
  function add (func) {

    if (typeof func === "function") {
      array.push(func); 
      return add;
    }
      
     else if (typeof func === "number") {
      return array.reduceRight((x, action) =>action(x), func);
  }
  }
  return add;
}
const a = seq(x => x + 7)(x => x * 2);
console.log(a(5)); // 24

const b = seq(x => x * 2)(x => x + 7);
console.log(b(5)); // 17

const c = seq(x => x + 1)(x => x * 2)(x => x / 3)(x => x - 4);
console.log(c(7)); // 3