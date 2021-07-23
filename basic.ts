//  boolean型
const flag: boolean = false;

// number型
const decimal: number = 256;
const hex : number = 0xfff;
const binary: number = 0b0000;
let octal: number = 0o123;

// string型
const color: string = 'white';
const myColor: string = `my color is ${color}`

// array型
const list1: number[] = [1, 2, 3];
const list2: Array<number> = [1, 2, 3];

//tuple型
let x: [string, number];
x = ['hello', 0]; // OK
x = [10, 'hello'] // NG

console.log(x[0].substr(1)) // OK
console.log(x[1].substr(1)) // NG

// any型
let whatever: any = 0;
whatever = 'somthing'
whatever = 100

// unknown型
const certainNubers: number[] = ['0']; // Error
const maybeNumbers: any[] = ['0'];
const probabyNumbers: unknown[] = ['0'];

certainNubers[0].toFixed(1)
maybeNumbers[0].toFixed(1)
probabyNumbers[0].toFixed(1) // Error

// void型
function logger(message: string): void {
    console.log(message)
}

// null型・undefined型
const u: undefined = undefined
const n: null = null

// never型
function error(message: string): never {
    throw new Error(message)
}
function infiniteLoop(): never {
    while (true) {
    }
}

// object型
let objectBrace: {}
let objectType: object

objectBrace = true
objectBrace = 0
objectType = false // Error
objectType = 1 // Error