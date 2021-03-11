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


// 引用类型
// 函数类型
function getData(url:string,type:string='get'):void{
    
}
const sum:(a:number,b:number)=>number = function(a:number,b:number):number{
    return a+b
}
getData('/api/list','post')
sum(10,20);
// sum('a','b'); // 报错

// 数组类型
// 1. 类型[]
let arr1:number[] = [10,20,30,40]
// 2. 泛型编程
let arr2:Array<string> = ['laoxie','jingjing']

// 元组Tuple：相当于一个已知数量和元素类型的数组
let arr3:[number,number,string,string] = [10,20,'laoxie','jingjing']

// 对象类型：接口Interface
interface Person{
    // 只读属性
    readonly age:number;
    username:string;
    // 可选属性
    gender?:string;

    // 方法类型
    say():void;

    [propName:string]:any
}
let user:Person = {username:'jingjing',gender:'女',age:36,say:function(){}}
// user.age = 37; // 报错
let user2:Person = {username:'tiantian',age:28,isMarry:123,say(){ }}

// 数组与对象的结合
interface IGoods{
    name:string;
    price:number;
    kucun:number;
    imgurl:string;
    oldPrice?:number;
}

// const goodslist:IGoods[] = [
const goodslist:Array<IGoods> = [
    {name:'goods1',price:998,oldPrice:10086,kucun:10,imgurl:'img/goods1.jpg'},
    {name:'goods2',price:198,kucun:16,imgurl:'img/goods1.jpg'}
]

// 泛型编程
function add<T,K>(a:T,b:K):T{
    return a ;
}

console.log(add(2,2));// 4
console.log(add('2','2'));// 22

