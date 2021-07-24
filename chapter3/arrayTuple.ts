let a1: boolean[]
let a2: (string | number)[]
let a3: (string | number | boolean)[]

a1 = [true, false]
a2 = [0, 1, '2']
a3 = [false, 1, '2']

const t3 = [false, 1, '2'] as [boolean, number, string]
const v3_0 = t3[0]
const v3_1 = t3[1]
const v3_2 = t3[2]
const v3_3 = t3[3] // error
