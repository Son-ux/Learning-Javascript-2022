let a = 5;
let b = "5";
let c;

c = a > b;
console.log(`c = ${c}`);

c = a < b;
console.log(`c = ${c}`);

c = a == b;
console.log(`c = ${c}`);

c = a === b;
console.log(`strict equality: c = ${c}`);

c = a != b;
console.log(`c = ${c}`);

c = 5 !== '5';
console.log(`strict equality: c = ${c}`);