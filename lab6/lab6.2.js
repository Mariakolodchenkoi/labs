const pipe = (...fnc) => {
const errors = [];
  const composed = (x) => {
    try {
    
      return fnc.reduceRight((g, fnc) => fnc(g), x);
      } catch (e) {
        for (const error of errors ) {
            error(e);
        };
      return undefined; 
    };
  }
composed.on = (event, error) => { 
    if(event ==="error"){
    errors.push(error);
}
}
  return composed;
};

const inc = x => x + 5;
const twice = x => x * 2;
const cube = x => x ** 3;

const f1 = pipe(inc,inc);
const f2 = pipe(inc, 7, cube);
f2.on("error", (e) => console.log("error:", e.message));
console.log(f1(7));
console.log(f2(7));