let score="33"
// typeof score or typeof(score)

let valueInNumber =Number(score)
console.log(typeof(valueInNumber));

let score2="33abc";
let valueInNumber2 =Number(score2)
console.log(typeof(valueInNumber2));
console.log(valueInNumber2);

let score3=null;
let valueInNumber3 =Number(score3)
console.log(typeof(valueInNumber3));
console.log(valueInNumber3);

let score4=undefined;
let valueInNumber4 =Number(score4)
console.log(typeof(valueInNumber4));
console.log(valueInNumber4);

let score5=true;
let valueInNumber5 =Number(score5)
console.log(typeof(valueInNumber5));
console.log(valueInNumber5);

//"33" --> 33
//"33abs" --> NaN
//true -->1; false-->0

let flag=1;
let flag2=34;
let boolean=Boolean(flag);
let boolean2=Boolean(flag2);
console.log(boolean);
console.log(boolean2);


//"akash"--> true;
//0--> false
//""--> false
let n=33;
let s=String(n);//"String()" to convert into String.
console.log(typeof(s));


