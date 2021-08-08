interface Box<T> {
    value: T
}

const box0: Box = { value: 'test' } //Error Genericsの指定がない
const box1: Box<string> = { value: 'test' }
const box2: Box<number> = { value: 1 }

interface Box1<T = string> {
    value: T
}
const box10: Box1 = { value: 'test' }
const box11: Box1<string> = { value: 'test' }
const box12: Box1<number> = { value: 1 }

interface Box2<T extends string | number> {
    value: T
}
const box20: Box2 = { value: 'test' } //Error Genericsの指定がない
const box21: Box2<string> = { value: 'test' }
const box22: Box2<boolean> = { value: false }

function boxed<T>(props: T) {
    return { value: props }
}
const box30 = boxed('test')
const box31 = boxed(0)
const box32 = boxed(false as boolean | null)
const box33 = boxed<string | null>(null)


