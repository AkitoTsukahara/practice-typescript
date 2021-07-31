interface Bounds {
    width: number
    height: number
    move(amount: string): string
}
interface Bounds {
    left: number
    top: number
    move(amount: number): string
}
const bounds: Bounds = {
    width: 0,
    height: 0,
    left: 0,
    top: 0,
    move: (amount: string | number) => {
        return `${amount}`
    }
}