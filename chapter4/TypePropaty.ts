type Answer = 'mighty' | 'lot' | 'few' | 'entirely'
type UserA = {
    name: string
    enquete: { [k: string]: Answer }
}
const userA: UserA = {
    name: 'Taro',
    enquete: {
        exercise_habits: 'entirely',
        time_of_sleeping: 'few'
    }
}
const xA = userA.enquete['exercise_habits']
const xB = userA.enquete['time_of_sleeping']

// 関数のみを許容する
interface Functions {
    [k: string]: Function
}
const functions: Functions = {
    name0: 'Taro', //error
    walk0: () => {},
    talk0: async() => {}
}

// Promiseを返却する関数のみ許容する
interface ReturnPromises {
    [k: string]: () => Promise<any>
}
const ReturnPromises: ReturnPromises = {
    name: 'Taro', //error
    walk: () => {}, //error
    talk: async() => {}
}