// export {}

let username:string = 'jingjing'
var age:number = 18
username = 'tiantian';

console.log('age=',age,username);


// 类型推论
let a = 10;// 等效于：let a:number = 10
// a = '100' // 报错

let b; // 声明一个变量没有指定类型也没有赋值，变量b会自动为any类型
b = 10;
b = '20';
b = true;

// 实际开发中，尽量不使用any声明变量类型
let c:any = 10
c = '10'
c = true;


// 赋值式
function sum(a:number,b:number):number{
    return a+b;
}
sum(10,20)

function sum2(a:number,b:number):never{
    console.log(a+b);
    throw new Error('xxx')
}

const sum3:(a:number,b?:number)=>number = function(a:number,b?:number):number{
    return a+b;
}
sum3(10,20)

// 字面量类型声明
let num:10 = 10;


// 联合类型
let idx:number|string = 1;
idx = '10'
let d:number|string = 10;
let e:number|string = 20;

// 类型别名
type ns = number|string;
let f:ns = 30;
f = '30'