let random=Math.random();
let a=prompt("Enter First Number")
let c=prompt("Enter Operator")
let b=prompt("Enter second number")

let obj={
    "+" : "-",
    "*" : "+",
    "-" : "/",
    "/" : "**"
}
if(random<0.1) c=obj[c];
alert(`The result is : ${eval(`${a} ${c} ${b}`)}`);