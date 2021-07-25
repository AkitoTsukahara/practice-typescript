function getFormattedValue(value: number | null):string {
    if(value === null) return '--pt'
    return `${value.toFixed(1)}pt`
}
console.log(getFormattedValue(0.1))
console.log(getFormattedValue(0))
console.log(getFormattedValue(null))


function greet(name?: string){
    if(name === undefined) return 'Hello'
    return `Hello ${name.toUpperCase}`
}
console.log(greet())
console.log(greet('taro'))

function _getFormattedValue(value: number, unit: string | null = null){
    const _value = value.toFixed(1)
    if (unit === null) return `${_value}`
    return `${_value} ${unit.toUpperCase()}`
    
}

type State = {
    readonly id: number
    name: string
}
const state: State = {
    id: 1,
    name: 'Taro'
}
state.name = 'Hanako'
state.id = 2