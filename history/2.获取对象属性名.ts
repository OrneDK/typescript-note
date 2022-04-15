/**
 * keyof
 * 1. 用于获取对象属性名，并用这些属性名构成联合类型
 * 2. 如果操作的类型是类，则会获取该类所有的public属性名
 */

type Friend = {
    firstName: string,
    lastName: string
}

/**
 * 1. 操作类型为对象
 */
type Keys = keyof Friend;
// 等价于  "firstName" | "lastName"


/**
 * 2. 操作类型为类
 */
class Person {
    public name: string;
    protected age: number;
    private sex: boolean;

    public foo() { }
    protected bar() { }
    private baz() { }
}

type KeysConstructor = keyof Person


/**
 * 3. 对类型中每一项进行遍历和修改
 */

type ReadOnly<T> = {
    readonly [P in keyof T]: T[P]
}

type FriendReadOnly = {
    firstName: string
    lastName: string
}

type ReadonlyFriend = ReadOnly<FriendReadOnly>;
// 等价于
// type ReadonlyFriend = {
//   readonly firstName: string;
//   readonly lastName: string;
// };

let readOnlyF: ReadonlyFriend = {
    firstName: 'Tim',
    lastName: 'cook'
}
// readOnlyF.firstName = 'cake' //无法分配到 "firstName" ，因为它是只读属性。