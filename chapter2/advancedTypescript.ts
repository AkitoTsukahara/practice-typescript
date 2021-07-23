// Intersection Type
// 複数の型を1つに統合する
type Tail = string
type Wing = string

type Dog = {
    tail: Tail
    bark: () => void
}
type Bird = {
    wing: Wing
    fly: () => void
}
type Kimera = Dog & Bird

function returnNever(): never {
    throw new Error()
}
let unexistenceType: string & number & boolean = returnNever()


// Union Types
// 複数の型の内で１つの型が成立すること
let value: boolean | number | string
value = false
value = 0
value = 'test'

let numberOrStrings: (number | string)[]
numberOrStrings = [0, '1']
numberOrStrings = [0, '1', false] //error

let nullableString: string | null
nullableString = null
nullableString = 'abcde'

let nullableStrings: (string | null)[] = []
nullableStrings.push('1')
nullableStrings.push(null)
nullableStrings.push(false) //error

// Literal Types
// 文字列に必要な値を指定することができる。Enumを実装する時に利用される
let myName: 'Taro'
myName = 'Taro'
myName = 'Jiro' //error

let colorEnum: 'red' | 'bule' | 'yellow'
let color: typeof colorEnum
color = 'bule'

// アサーション
let someValue: any = "this is a string"
let strLength0: number = (<string>someValue).length
let strLength1: number = (someValue as string).length