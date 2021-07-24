function getPriceLabel(amount: number, tax: number): string {
    return `¥${amount * tax}`
}

// 処理内容によって、戻り値が変化する場合
function getScore(score: number): number | null {
    if (score < 0 || score > 10) {
        return null
    }
    return score
}