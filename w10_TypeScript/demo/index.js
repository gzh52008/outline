// export {}
var username = 'jingjing';
var age = 18;
username = 'tiantian';
console.log('age=', age, username);
// 类型推论
var a = 10; // 等效于：let a:number = 10
// a = '100' // 报错
var b; // 声明一个变量没有指定类型也没有赋值，变量b会自动为any类型
b = 10;
b = '20';
b = true;
// 实际开发中，尽量不使用any声明变量类型
var c = 10;
c = '10';
c = true;
// 赋值式
function sum(a, b) {
    return a + b;
}
sum(10, 20);
function sum2(a, b) {
    console.log(a + b);
    throw new Error('xxx');
}
var sum3 = function (a, b) {
    return a + b;
};
sum3(10, 20);
// 字面量类型声明
var num = 10;
// 联合类型
var idx = 1;
idx = '10';
var d = 10;
var e = 20;
var f = 30;
f = '30';
