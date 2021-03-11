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
// 字面量类型声明
var num = 10;
// 联合类型
var idx = 1;
idx = '10';
var d = 10;
var e = 20;
var f = 30;
f = '30';
// 引用类型
// 函数类型
function getData(url, type) {
    if (type === void 0) { type = 'get'; }
}
var sum = function (a, b) {
    return a + b;
};
getData('/api/list', 'post');
sum(10, 20);
// sum('a','b'); // 报错
// 数组类型
// 1. 类型[]
var arr1 = [10, 20, 30, 40];
// 2. 泛型编程
var arr2 = ['laoxie', 'jingjing'];
// 元组Tuple：相当于一个已知数量和元素类型的数组
var arr3 = [10, 20, 'laoxie', 'jingjing'];
var user = { username: 'jingjing', gender: '女', age: 36, say: function () { } };
// user.age = 37; // 报错
var user2 = { username: 'tiantian', age: 28, isMarry: 123, say: function () { } };
// const goodslist:IGoods[] = [
var goodslist = [
    { name: 'goods1', price: 998, oldPrice: 10086, kucun: 10, imgurl: 'img/goods1.jpg' },
    { name: 'goods2', price: 198, kucun: 16, imgurl: 'img/goods1.jpg' }
];

// 泛型编程
function add(a, b) {
    return a + b;
}
console.log(add(2, 2)); // 4
console.log(add('2', '2')); // 22
