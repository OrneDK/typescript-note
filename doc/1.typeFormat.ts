// 1.类型注释,当鼠标使用到该类型时，编辑器会有更好的提示。
/** person information */
interface User {
    name: string,
    age: number,
    sex: 'male' | 'female'
}
// 鼠标指入User类型时，会出现提示
const p: User = {
    name: 'Lucky',
    age: 20,
    sex: 'female'
}