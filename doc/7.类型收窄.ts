/**
 * @name 类型收窄
 * TypeScript 类型收窄就是从宽类型转换成债类型的过程，其常用与处理联合类型变量的场景。具体办法为：
 * 1. 类型断言
 * 2. 类型守卫
 * 3. 双重断言
 */


/**
 * @name 1.类型断言
 * 可以明确地告诉 Typescript 值的详细类型。当在某些场景下，我们非常确认某个值的类型，即使与 Typescript 推断出来的类型不一致，这时我们就可以使用类型断言
 */



/**
 * @name 2.类型守卫
 * 类型守卫主要有以下集中方式：
 * typeof：用于判断number，string，boolean或symbol四种类型
 * instanceof：用于判断一个实例是否属于某个类
 * in:用于判断一个属性、方法是否属于某个对象
 */


// type Foo = string | number;
// function controlFlowAnalysisWithNever(foo: Foo) {
//     if (typeof foo === 'string') {
//         // 这里foo 被收窄为string类型
//     } else if (typeof foo === 'number') {
//         // 这里foo被收窄为number类型
//     } else {
//         // foo在此处为never
//         const check: never = foo;
//     }
// }

type Foo = string | number | boolean;


// instanceof
class Man {
    handsome = 'handsome'
}

class Woman {
    beautiful = 'beautiful'
}

function Human(arg: Man | Woman) {
    if (arg instanceof Man) {
        console.log(arg.handsome);
    } else {
        console.log(arg.beautiful);
    }
}


// in
interface A {
    a: string
}
interface B {
    b: string
}

function foo(x: A | B) {
    // 如果x中包含a属性
    if ('a' in x) {
        return x.a
    }
    return x.b
}


/**
 * @name 双重断言
 * @desc: 除非迫不得已，否则不要轻易使用双重断言。
 */


// TS3.0中新增一种unknow类型，unknown必须在进行类型判断和条件控制之后才可以被分配成其他类型，并且在类型判断和条件控制之前也不能进行任何操作。
function handler(event: Event) {
    const element = event as any as HTMLElement;
}