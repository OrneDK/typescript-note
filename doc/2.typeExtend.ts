// 2.类型扩展 Typescript中定义类型有两种方式:接口(interface)和类型别名(type alias).在下面的例子中，除了语法不一样，定义的类型是一样的。
// interface Point {
//     x: number,
//     y: number
// }

// interface SetPoint {
//     (x: number, y: number): void;
// }

type Point = {
    x: number,
    y: number
}

type SetPoint = (x: number, y: number) => void;


type extendPoint = Point & { y: number }



/**
 * Q&A
 * 接口和类型别名的选用时机：
 * 1.在定义公共API（库）时使用interface，这样可以方便使用者继承接口；
 * 2. 在定义组件属性(props)和状态(state)时，建议使用type，因为type的约束性更强；
 * type类型不能二次编辑，而interface可以随时扩展
 */