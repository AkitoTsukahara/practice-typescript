// 厳格なLiteral Typeを期待する場合は、明示的な型付与（型アノテーションまたは型アサーション）が必要
const wideningZero = 0 // 再代入可能な代入になっている
const nonWideningZero: 0 = 0 // 再代入不可能な代入になっている
const asNonWideningZero = 0 as 0 // 再代入不可能な代入になっている

let zeroA = 0
let zeroB = wideningZero
let zeroC = nonWideningZero
let zeroD = asNonWideningZero
const zeros = {
    zeroA, // :number
    zeroB, // :number
    zeroC, // :0
    zeroD  // :0
}
