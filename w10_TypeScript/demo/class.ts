// 类class
class Student{
    // 实例属性
    // 私有属性：只能在当前类中访问
    private name:string;
    private gender:string = 'male';

    // 公有属性(默认)：该属性可以任意地方访问
    public readonly age:number;

    // 受保护属性
    protected score:number = 100;

    type:string = 'Student';

    // 静态属性(类属性)
    static type:string = 'Stu type';
    constructor(name:string,age:number){
        this.name = name;
        this.age = age;
    }
    getName(){
        console.log(this.name)
    }
}

const s1 = new Student('jingjing',36);
console.log('s1=',s1);
// s1.age = 123;

// 读取静态属性
console.log('Student.type',Student.type);

// 读取实例属性
console.log('s1.type',s1.type);
// s1.name;
s1.getName();
s1.age;
// s1.score;

class User extends Student{

}

let u1 = new User('laoxie',18);
console.log('u1=',u1);