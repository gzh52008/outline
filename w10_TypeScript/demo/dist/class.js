var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// 类class
var Student = /** @class */ (function () {
    function Student(name, age) {
        this.gender = 'male';
        // 受保护属性
        this.score = 100;
        this.type = 'Student';
        this.name = name;
        this.age = age;
    }
    Student.prototype.getName = function () {
        console.log(this.name);
    };
    // 静态属性(类属性)
    Student.type = 'Stu type';
    return Student;
}());
var s1 = new Student('jingjing', 36);
console.log('s1=', s1);
// s1.age = 123;
// 读取静态属性
console.log('Student.type', Student.type);
// 读取实例属性
console.log('s1.type', s1.type);
// s1.name;
s1.getName();
s1.age;
// s1.score;
var User = /** @class */ (function (_super) {
    __extends(User, _super);
    function User() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return User;
}(Student));
var u1 = new User('laoxie', 18);
console.log('u1=', u1);
