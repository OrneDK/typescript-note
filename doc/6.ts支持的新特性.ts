/**
 * @name 可选链
 * ?.
 */


let user = {
    info: {
        getAge: function () {
            return '1'
        }
    }
}

// before
let age = user && user.info && user.info.getAge && user.info.getAge()

// after,依次查找，如果未找到，返回false，如果找到，则直接相应方法
let ageAfter = user?.info?.getAge?.()
console.log(ageAfter, 'ageAfter');



/**
 * @name 空值合并运算符
 * @desc: ES2021新增特性，当左侧的内容为null或者undefined时，返回右侧内容，否则返回左侧操作数
 */

const userManager: any = {
    level: 0
}

let level1 = userManager.level ?? '暂无等级'
let level2 = userManager.GlodLevel ?? '暂无等级'

console.log(level1, 'level1');  // 0
console.log(level2, 'level2');  // 暂无等级




/**
 * @name 访问限定修饰符
 * 类型定义允许使用private、protected和public这三种访问修饰符声明成员访问限制，并在编译器进行检查：
 * public:默认为此访问级别，公有类型，在类里面，子类、类外面都可以访问到
 * protected：保护类型，在类里面、子类里面可以访问，在类外部不能访问
 * private：私有类型，只能在当前类内部访问
 */


class Person {
    private name: string
    private age: number
    // [static] 关键字，可以将类里面的属性和方法定义为类的静态属性和方法
    public static sex: string = "Male";
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
    public run(): void {
        console.log(`${this.name}在跑步`);
    }
    public setName(name: string): void {
        this.name = name
    }
}


let p: Person = new Person('Tony', 22)
console.log(Person.sex);    // Male
p.run()                     // Tony在跑步
p.setName('john')
p.run()                     // john在跑步
