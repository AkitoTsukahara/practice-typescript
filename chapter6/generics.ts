interface Box<T> {
    value: T
}

const box0: Box = { value: 'test'} //Error Genericsの指定がない
const box1: Box<string> = { value: 'test'}
const box2: Box<number> = { value: 1}

interface Box1<T = string> {
    value: T
}
const box10: Box1 = { value: 'test'}
const box11: Box1<string> = { value: 'test'}
const box12: Box1<number> = { value: 1}

interface Box2<T extends string | number> {
    value: T
}