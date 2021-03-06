// 型の互換性を条件分岐にかけ、型推論を導出する型
type IsString<T> = T extends string ? true : false
type X = IsString<'test'>
type Y = IsString<0>

interface Properties {
    name: string
    age: number
    flag: boolean
}
type IsType<T, U> = {
    [K in keyof T]: T[K] extends U ? true : false
}

