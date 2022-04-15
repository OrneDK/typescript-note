/**
 * @name 8.常量枚举
 * @desc: enum定义的枚举类型
 * 常数枚举与普通枚举的区别是：前者会在编译阶段被移除。并且不能包含计算成员(即常量枚举成员初始值设定项只能包含文字值和其他计算的枚举值)
 */
const enum Directions {
    Up,
    Down,
    Left,
    Right
}

let directions = [Directions.Up, Directions.Down, Directions.Left, Directions.Right]
//编译结果
// var directions = [0 /* Up */ , 1 /* Down */ , 2 /* Left */ , 3 /* Right */ ];



// 常量枚举值不会在编译阶段计算，否则会报错
const enum Color {
    Red, 
    Green, 
    // Blue = 'blue'.length //error:常量枚举成员初始值设定项只能包含文字值和其他计算的枚举值。
}