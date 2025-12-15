const pipe = (...fns) => {
  for (const fn of fns) {
    if (typeof fn != "function") {
      throw new Error("Enter all functions!");
    }
  }

  return (x) => fns.reduce((g, func) => func(g), x);
};


const inc = x => ++x;
const twice = x => x * 2;
const cube = x => x ** 3;

    const f = pipe(inc, twice, cube);
    console.log(f(5)); 

    const f2 = pipe(inc, inc);
    console.log(f2(7)); 

try {
    const f3 = pipe(inc, 7, cube);
    console.log(f3(5)); 
} catch (e) {
    console.warn(`error: ${e.message}`);
}