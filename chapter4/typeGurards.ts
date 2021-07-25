//typeofによる絞り込む型
//typeof type gurads
function reset(value: number | string | boolean) {
    const v0 = value
    if (typeof value === 'number') {
        const v1 = value
        return 0
    }
    const v2 = value
    if (typeof value === 'string') {
        const v3 = value
        return ''
    }
    const v4 = value
    return false
}

//in type gurads
type User0 = { gender: string }
type User1 = User0 & { name: string }
type User2 = User0 & { age: number; graduate: string }
function judgeUserType(user: User1 | User2) {
    if ('gender' in user) {
        const u0 = user
        console.log('user type is User1 | User2')
    }
    if ('name' in user) {
        const u1 = user
        console.log('user type is User1')
        return
    }
    const u2 = user
    console.log('user type is User2')
}

//Union Type
type User01 = { gender: 'male'; name: 'string' }
type User02 = { gender: 'female'; age: 'number' }
type User03 = { gender: 'other'; graduate: 'string' }
function judgeUserType00(user: User01 | User02 | User03) {
    switch(user.gender) {
        case 'male':
            const uA = user
            return 'user type is User01'
        case 'female':
            const uB = user
            return 'user type is User02'
        case 'other':
            const uC = user
            return 'user type is User03'
        default:
            const uD = user
            return 'user type is never'
    }
}

//ユーザ定義 type guards
type User000 = { gender: string; [k: string]: any }
type User00A = User000 & { name: string }
type User00B = User000 & { age: number }
function isUser00A(user: User00A | User00B): user is User00A {
    return user.name !== undefined
}
function isUser00B(user: User00A | User00B): user is User00B {
    return user.age !== undefined
}
function getUser000Type(user: any){
    const u000 = user
    if (isUser00A(user)) {
        const u00A = user
        return '00A'
    }
    if (isUser00B(user)) {
        const u00B = user
        return '00B'
    }
    return 'unknown'
}
