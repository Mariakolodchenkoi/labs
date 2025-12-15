const sum = (...args) => {
  let total = 0;
  for (let i = 0; i < args.length; i++) {
    total += args[i];
  }
 console.log("for:"+ total);

let total2 = 0;
for(const item of args){
    total += item;
}
console.log("forof:"+ total2);

let total3 = 0;
let i3 =0;
while(i3 < args.lenght){
    total += args[i3];
    i3++;
}
console.log("while:"+ total);

let total4 = 0;
let i4 =0;
do{
    total += args[i4];
    i4++;
}

while(i4 < args.lenght);
console.log("downhile:" + total); 

let total5 = 0;
console.log("reduce:" + args.reduce((total5, x) => total5 = x, 0));
};

const a = sum (1,2,3);
const b = sum (0);
const c = sum ();
const d = sum (1,-1,1);
const e = sum (10,-1,-1,-1);