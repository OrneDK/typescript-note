interface Person {
    name: 'Tim',
    age: 29
}


type PType<T, K extends keyof T> = {
    [key in K]: T[key]
}

let pAge: PType<Person, 'age'> = {
    age: 29
}

let pName: PType<Person, 'name'> = {
    name: 'Tim'
}